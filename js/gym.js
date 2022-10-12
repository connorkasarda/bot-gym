// Allows gym to have a 3D appearance and apply the laws of physics
import * as THREE from './pkg/three.js';
import * as AMMO from './pkg/ammo.js';
// Provides space for robots to be tested in
export class Gym {
    constructor() {
        // Add a scene, camera, and renderer
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-4, 4, 2, -2, 1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        // Sets camera position and angle
        this.camera.position.set(2, 2, 2);
        this.camera.lookAt(0, 0, 0);
        // Sets renderer size and append to HTML
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        // Adds a grid to the scene
        this.grid = new THREE.GridHelper(2, 10, 0x888888);
        this.scene.add(this.grid);
    }
    // Animates the gym
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}