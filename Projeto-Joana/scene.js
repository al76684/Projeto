import * as THREE from 'three';
import { PointerLockControls } from 'PointerLockControls';
import { criarMesa } from './mesa.js';
import { criarCadeira1 } from './cadeira1.js';
import { criarCadeira2 } from './cadeira2.js';
import { criarVaso, criarFlor } from './vaso.js';
import { criarPecaVermelha, criarPecaAmarela } from './peca.js';

var scene, camera, renderer, meshFloor, controls;
var player = { height: 1.8, speed: 0.2, turnSpeed: Math.PI * 0.02 };
var USE_WIREFRAME = false;
var light;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.intensity = 1.5; 
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    light.position.y = 5;
    light.position.x = -5;
    scene.add(light);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    
    var mesa = criarMesa();
    scene.add(mesa);
    

    // Criar e adicionar as cadeiras à cena
   
    var cadeira1 = criarCadeira1();
    cadeira1.position.set(1, 0, 0.10); // Define a posição da cadeira1 (no lado direito da mesa)
    var angle = Math.PI/2;
    cadeira1.rotation.y -= angle

    scene.add(cadeira1); // Adiciona a cadeira1 à cena

    var cadeira2 = criarCadeira2();
    cadeira2.position.set(-1, 0, -0.10);
    var angle = Math.PI /2;
    // Aplica a rotação à cadeira2
    cadeira2.rotation.y += angle;
    scene.add(cadeira2);

    // Criar e adicionar o vaso à cena
    var vaso = criarVaso();
    vaso.position.set(4.5, 0.5, 4.5); // Define a posição do vaso
    scene.add(vaso);

    // Criar a flor e adicionar ao vaso
    var flor = criarFlor();
    vaso.add(flor);

    //criar e adicionar peça vermelha
    var pecaVermelha = criarPecaVermelha();
    pecaVermelha.position.set(-1.5, 2, 0);//posiçao peça vermelha
    pecaVermelha.rotation.x = Math.PI / 2;//rodar eixo x 90º
    scene.add(pecaVermelha);

    //criar e adicionar peça amarela
    var pecaAmarela = criarPecaAmarela();
    pecaAmarela.position.set(1.5, 2, 0);//posição peça amarela
    pecaAmarela.rotation.x = Math.PI / 2;//rodar eixo x 90º
    scene.add(pecaAmarela);
    

    // Criação da Skybox
    var texture_dir = new THREE.TextureLoader().load('./Skybox/rainbow_rt.png');
    var texture_esq = new THREE.TextureLoader().load('./Skybox/rainbow_lf.png');
    var texture_up = new THREE.TextureLoader().load('./Skybox/rainbow_up.png');
    var texture_dn = new THREE.TextureLoader().load('./Skybox/rainbow_dn.png');
    var texture_bk = new THREE.TextureLoader().load('./Skybox/rainbow_ft.png');
    var texture_ft = new THREE.TextureLoader().load('./Skybox/rainbow_bk.png');

    var materialArray = [
        new THREE.MeshBasicMaterial({ map: texture_esq }),
        new THREE.MeshBasicMaterial({ map: texture_dir }),
        new THREE.MeshBasicMaterial({ map: texture_up }),
        new THREE.MeshBasicMaterial({ map: texture_dn }),
        new THREE.MeshBasicMaterial({ map: texture_bk }),
        new THREE.MeshBasicMaterial({ map: texture_ft })
    ];

    for (var i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;

    var skyboxGeo = new THREE.BoxGeometry(100, 100, 100);
    var skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);

    // Criação do Chão
    var textureFloor = new THREE.TextureLoader().load('./texture/soft_grey.png');
    var materialFloor = new THREE.MeshPhongMaterial({ map: textureFloor });

    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10, 10, 10),
        materialFloor
    );

    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;
    scene.add(meshFloor);

    camera.position.set(0, player.height, -5);
    camera.lookAt(new THREE.Vector3(0, player.height, 0));

    controls = new PointerLockControls(camera, renderer.domElement);
    scene.add(controls.getObject());

    controls.addEventListener('lock', function () {
        // Action when the control is locked
    });

    controls.addEventListener('unlock', function () {
        // Action when the control is unlocked
    });

    document.addEventListener("keydown", onDocumentKeyDown, false);

    document.addEventListener('click', function () {
        if (!controls.isLocked) {
            controls.lock();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.code === 'Escape' && controls.isLocked) {
            controls.unlock();
        }
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;

    if (keyCode == 87) {
        controls.moveForward(0.25);
    }
    else if (keyCode == 83) {
        controls.moveForward(-0.25);
    }
    else if (keyCode == 65) {
        controls.moveRight(-0.25);
    }
    else if (keyCode == 68) {
        controls.moveRight(0.25);
    }
    else if (keyCode == 32) {
        if (mesh.parent === scene) {
            scene.remove(mesh);
        } else {
            scene.add(mesh);
        }
    }
}

window.onload = init;
