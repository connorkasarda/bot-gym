// Import the THREE javascript file for 3D graphics
import * as THREE from './scr/three.module.js';
// Creates the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
// Sets the render size and add the renderer to HTML document
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Adds yellow cube to the scene
const cube_geometry = new THREE.BoxGeometry(1, 1, 1);
const cube_material = new THREE.MeshBasicMaterial({color: 0xFFFF00});
const cube = new THREE.Mesh(cube_geometry, cube_material);
scene.add(cube);
// Adds static (non-moving) blue lines to the scene
const line_points = [];
line_points.push(new THREE.Vector3(-2, 0, 0));
line_points.push(new THREE.Vector3(0, 2, 0));
line_points.push(new THREE.Vector3(2, 0, 0));
line_points.push(new THREE.Vector3(0, -2, 0));
line_points.push(new THREE.Vector3(-2, 0, 0));
const line_geometry = new THREE.BufferGeometry().setFromPoints(line_points);
const line_material = new THREE.LineBasicMaterial({color: 0x0000FF});
const line = new THREE.Line(line_geometry, line_material);
line.matrixAutoUpdate = false;
scene.add(line);
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