// Ignore
// import { WEBGL } from "https://webglsamples.org/tdl/webgl.js";

// START HERE
// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Add renderer to web page

// Geometry (a cube wirefrsme, in this case)
const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);

// Material (turns vectors to rgb)
const material = new THREE.MeshNormalMaterial({ wireframe: false });

// Mesh (the cube you see)
const cube = new THREE.Mesh(geometry, material); // Combines geometry & material

console.log("geometry", geometry);
console.log("material", material);
console.log("mesh", cube);

scene.add(cube); // Add mesh to scene

// Position camera
camera.position.z = 5;
camera.position.x = 1;

// Run an animation loop
const animate = function () {
  requestAnimationFrame(animate);

  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  cube.rotation.x += 0.1; // Make the mesh spin
  cube.rotation.y += 0.2;
  // camera.position.z -= 0.05;

  renderer.render(scene, camera);
};

// if (WEBGL.isWebGLAvailable()) {
//   // Initiate function or other initializations here
animate();
// } else {
//   const warning = WEBGL.getWebGLErrorMessage();
//   document.getElementById("container").appendChild(warning);
// }

/* NOT PART OF IT */
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});
