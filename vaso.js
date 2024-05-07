// vaso.js

import * as THREE from 'three';

function criarVaso() {
    // Geometria do vaso
    var geometriaVaso = new THREE.CylinderGeometry(0.6, 0.3, 1, 10);
    
    // Material do vaso
    var materialVaso = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    
    // Mesh do vaso
    var vaso = new THREE.Mesh(geometriaVaso, materialVaso);
    
    return vaso;
}

function criarFlor() {
    // Geometria da flor (por exemplo, uma esfera para representar uma flor simples)
    var geometriaFlor = new THREE.SphereGeometry(0.2, 8, 8);
    
    // Material da flor (pode ser um material diferente, como um material verde para a folhagem)
    var materialFlor = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    
    // Mesh da flor
    var flor = new THREE.Mesh(geometriaFlor, materialFlor);
    
    // Posicionar a flor em cima do vaso
    flor.position.set(0, 1, 0); // Posição relativa ao vaso
    
    return flor;
}

export { criarVaso, criarFlor };
