// Import the THREE javascript file for 3D graphics
import * as THREE from './lib/three.module.js';
import * as AMMO from './lib/ammo.js';
// Creates the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true});
// Sets the render size and add the renderer to HTML document
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Adds yellow cube to the scene
const cube_geometry = new THREE.BoxGeometry(1, 1, 1);
const cube_material = new THREE.MeshBasicMaterial({color: 0x7A2048});
const cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube);
// Sets the camera position
camera.position.set(0, 0, 10);
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