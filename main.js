import * as THREE from "three";
import * as planck from "planck";
import WebGL from "three/addons/capabilities/WebGL.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 25;

const SCALE_FACTOR = 2.0;

// Physics
let pl = planck,
  Vec2 = pl.Vec2,
  Box = pl.Box;

let world = pl.World({ gravity: Vec2(0.0, -10) });

// Helper Function to create box
function createBodyAndMesh(width, height, depth, xCor, yCor, color, type) {
  const body = world.createBody({ position: Vec2(xCor, yCor), type });
  body.createFixture({ shape: Box(width, height), density: 1.0 });

  const geometry = new THREE.BoxGeometry(width * 2, height * 2, depth);
  const material = new THREE.MeshBasicMaterial ({ color: color });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(xCor, yCor, 1.0);
  scene.add(mesh);

  const getPosition = () => {
    const pos = body.getPosition();
    return { x: pos.x, y: pos.y };
  };

  return { body, mesh, getPosition };
}

let playerDef = {
  w: 1.0,
  h: 2,
  d: 1.0,
  x: 0.0,
  y: 10.0,
};

const player = createBodyAndMesh(playerDef.w, playerDef.h, playerDef.d, playerDef.x, playerDef.y, 0x0000ff, "dynamic");
const test = createBodyAndMesh(playerDef.w, playerDef.h, playerDef.d, 1.8, 20.0, 0xff0000, "dynamic");

let groundDef = {
  w: 20.0,
  h: 0.125,
  d: 1.0,
  x: 0.0,
  y: 0.0,
};

const ground = createBodyAndMesh(groundDef.w, groundDef.h, groundDef.d, groundDef.x, groundDef.y, 0x00ff00, "static");

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Simulate one step in Physics world
  world.step(1 / 60);

  const playerPos = player.getPosition();
  // player.body.position.set(playerPos.x, playerPos.y, playerBox.position.z);
  player.mesh.position.set(playerPos.x, playerPos.y, player.mesh.position.z);

  const testPos = test.body.getPosition();
  const testAngleDegrees = test.body.getAngle();
  test.mesh.position.set(testPos.x, testPos.y, test.mesh.position.z);
  test.mesh.rotation.z = testAngleDegrees;

  renderer.render(scene, camera);
}

window.onmouseup = function (e) {
  let vector = new THREE.Vector3();
  vector.set(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1,
    0
  );
  vector.unproject(camera);

  console.log(vector);
};

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
