// Import the THREE javascript file for 3D graphics
import * as THREE from './scr/three.module.js';

// Creates the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Sets the render size and add the renderer to HTML document
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adds red cube to the scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xFF0000});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Sets the camera position
camera.position.z = 5;

// Creates animation loop function
function animate() {
    // Updates animation for next repaint
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// Animates the scene
animate();