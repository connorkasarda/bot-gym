// Import the THREE javascript file for 3D graphics
import * as THREE from './pkg/three.module.js';
// Creates the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true});
// Sets the render size and adds the renderer to HTML document
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Sets the camera position
camera.position.set(0, 0, 10);
// Creates animation loop function
function animate() {
    // Updates animation for next repaint
    requestAnimationFrame(animate);
    // Render the scene
    renderer.render(scene, camera);
}
// Animates the scene
animate();