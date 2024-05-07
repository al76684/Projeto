import * as THREE from 'three';

function criarCadeira1() {
    var cadeira1 = new THREE.Group();

    // Assento da cadeira
    var assentoGeometry = new THREE.BoxGeometry(1, 0.1, 1);
    var assentoTexture = new THREE.TextureLoader().load('./texture/planks.png');
    var assentoMaterial = new THREE.MeshPhongMaterial({ map: assentoTexture });
    var assento = new THREE.Mesh(assentoGeometry, assentoMaterial);
    assento.position.set(0, 0.55, 0); // Ajuste da posição do assento para ficar mais acima
    cadeira1.add(assento);

    // Encosto da cadeira
    var encostoGeometry = new THREE.BoxGeometry(1, 1, 0.1);
    var encostoMaterial = new THREE.MeshPhongMaterial({ map: assentoTexture }); // Mesma textura do assento
    var encosto = new THREE.Mesh(encostoGeometry, encostoMaterial);
    encosto.position.set(0, 1.05, -0.5); // Ajuste da posição do encosto para ficar mais acima
    cadeira1.add(encosto);

    // Pernas da cadeira
    var pernaGeometry = new THREE.BoxGeometry(0.1, 0.9, 0.1);
    var pernaMaterial = new THREE.MeshPhongMaterial({ map: assentoTexture }); // Mesma textura do assento
    var perna1 = new THREE.Mesh(pernaGeometry, pernaMaterial);
    perna1.position.set(-0.4, 0.05, -0.4); // Ajuste da posição da perna 1 para ficar mais acima
    cadeira1.add(perna1);

    var perna2 = perna1.clone();
    perna2.position.set(0.4, 0.05, -0.4); // Ajuste da posição da perna 2 para ficar mais acima
    cadeira1.add(perna2);

    var perna3 = perna1.clone();
    perna3.position.set(-0.4, 0.05, 0.4); // Ajuste da posição da perna 3 para ficar mais acima
    cadeira1.add(perna3);

    var perna4 = perna1.clone();
    perna4.position.set(0.4, 0.05, 0.4); // Ajuste da posição da perna 4 para ficar mais acima
    cadeira1.add(perna4);

    // Configuração de sombras
    assento.castShadow = true;
    encosto.castShadow = true;
    perna1.castShadow = true;
    perna2.castShadow = true;
    perna3.castShadow = true;
    perna4.castShadow = true;

    return cadeira1;
}

export { criarCadeira1 };
