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

let playerDef = {
  w: 1.0,
  h: 2,
  d: 1.0,
  x: 0.0,
  y: 10.0,
};

let player = world.createDynamicBody({
  position: Vec2(playerDef.x, playerDef.y),
});
player.createFixture({ shape: Box(playerDef.w, playerDef.h) });

const playerGeo = new THREE.BoxGeometry(
  playerDef.w * 2,
  playerDef.h * 2,
  playerDef.d
);
const playerMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const playerBox = new THREE.Mesh(playerGeo, playerMat);
scene.add(playerBox);

let testBody = world.createDynamicBody({
  position: Vec2(1.8, 20.0),
});
testBody.createFixture({ shape: Box(playerDef.w, playerDef.h), density: 1.0 });

const testMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const testBox = new THREE.Mesh(playerGeo, testMat);
scene.add(testBox);

let groundDef = {
  w: 20.0,
  h: 0.125,
  d: 1.0,
  x: 0.0,
  y: 0.0,
};

let ground = world.createBody({ position: Vec2(groundDef.x, groundDef.y) });
ground.createFixture({
  shape: Box(groundDef.w, groundDef.h),
  density: 0.0,
});

const groundGeo = new THREE.BoxGeometry(
  groundDef.w,
  groundDef.h * 2,
  groundDef.z
);
const groundMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const groundBox = new THREE.Mesh(groundGeo, groundMat);
scene.add(groundBox);

// const groundPos = convertBox2DToThree(ground.getPosition());
// groundBox.position.set(groundPos.x, groundPos.y, groundPos.z);

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Simulate one step in Physics world
  world.step(1 / 60);

  const playerPos = player.getPosition();
  playerBox.position.set(playerPos.x, playerPos.y, playerBox.position.z);

  const testPos = testBody.getPosition();
  const testAngleDegrees = testBody.getAngle();
  testBox.position.set(testPos.x, testPos.y, testBox.position.z);
  testBox.rotation.z = testAngleDegrees;

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
