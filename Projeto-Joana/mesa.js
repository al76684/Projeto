import * as THREE from 'three';

function criarMesa() {
    var mesa = new THREE.Group();

    // Criação da geometria da mesa
    var mesaTampoGeometry = new THREE.BoxGeometry(2, 0.2, 2);
    var mesaPernaGeometry = new THREE.BoxGeometry(0.1, 1, 0.1);

    // Carregamento da textura da madeira para a mesa
    var textureMesa = new THREE.TextureLoader().load('./texture/planks.png');
    var materialMesa = new THREE.MeshPhongMaterial({ map: textureMesa });

    // Criação do tampo da mesa
    var mesaTampo = new THREE.Mesh(mesaTampoGeometry, materialMesa);
    mesaTampo.position.y = 1; // Ajusta a altura do tampo
    mesa.add(mesaTampo);

    // Criação das pernas da mesa
    var mesaPerna1 = new THREE.Mesh(mesaPernaGeometry, materialMesa);
    mesaPerna1.position.set(-0.9, 0.5, 0.9); // Ajusta a posição da perna
    mesa.add(mesaPerna1);

    var mesaPerna2 = new THREE.Mesh(mesaPernaGeometry, materialMesa);
    mesaPerna2.position.set(0.9, 0.5, 0.9); // Ajusta a posição da perna
    mesa.add(mesaPerna2);

    var mesaPerna3 = new THREE.Mesh(mesaPernaGeometry, materialMesa);
    mesaPerna3.position.set(-0.9, 0.5, -0.9); // Ajusta a posição da perna
    mesa.add(mesaPerna3);

    var mesaPerna4 = new THREE.Mesh(mesaPernaGeometry, materialMesa);
    mesaPerna4.position.set(0.9, 0.5, -0.9); // Ajusta a posição da perna
    mesa.add(mesaPerna4);

    // Configuração de sombras
    mesaTampo.castShadow = true;
    mesaPerna1.castShadow = true;
    mesaPerna2.castShadow = true;
    mesaPerna3.castShadow = true;
    mesaPerna4.castShadow = true;

    return mesa;
}

export { criarMesa };