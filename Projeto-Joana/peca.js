import * as THREE from 'three';

function criarPeca(cor) {
    var peca = new THREE.Group();

    // Criação da geometria da peça
    var raio = 0.4;
    var altura = 0.1;
    var segmentos = 32;
    var geometriaPeca = new THREE.CylinderGeometry(raio, raio, altura, segmentos);

    // Definição da cor da peça
    var materialPeca = new THREE.MeshPhongMaterial({ color: cor });

    // Criação da peça
    var pecaMesh = new THREE.Mesh(geometriaPeca, materialPeca);
    peca.add(pecaMesh);

    // Configuração de sombras
    pecaMesh.castShadow = true;

    return peca;
}

function criarPecaVermelha() {
    return criarPeca(0xff0000); // Vermelho
}

function criarPecaAmarela() {
    return criarPeca(0xffff00); // Amarelo
}

export { criarPecaVermelha, criarPecaAmarela };
