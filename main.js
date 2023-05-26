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

camera.position.z = 50;

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
  fixedRotation: true,
});
player.createFixture({ shape: Box(playerDef.w, playerDef.h), density: 1.0 });

const playerGeo = new THREE.BoxGeometry(
  playerDef.w * 2,
  playerDef.h * 2,
  playerDef.d * 2
);
const playerMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const playerBox = new THREE.Mesh(playerGeo, playerMat);
scene.add(playerBox);

let hammerDef = {
  w: 0.5,
  h: 0.25,
  d: 0.25,
  x: -2,
  y: 3,
};

let hammer = world.createDynamicBody({
  position: Vec2(hammerDef.x, hammerDef.y),
  gravityScale: 0,
});
hammer.createFixture({ shape: Box(hammerDef.w, hammerDef.h), density: 1.0 });

const hammerGeo = new THREE.BoxGeometry(
  hammerDef.w * 2,
  hammerDef.h * 2,
  hammerDef.d * 2
);
const hammerMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const hammerBox = new THREE.Mesh(hammerGeo, hammerMat);
scene.add(hammerBox);

let joint = world.createJoint(
  pl.RopeJoint({
    bodyA: player,
    bodyB: hammer,
    collideConnected: false,
    maxLength: 10,
  })
);

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
  groundDef.w * 2,
  groundDef.h * 2,
  groundDef.z
);
const groundMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const groundBox = new THREE.Mesh(groundGeo, groundMat);
scene.add(groundBox);

// const groundPos = convertBox2DToThree(ground.getPosition());
// groundBox.position.set(groundPos.x, groundPos.y, groundPos.z);

let pos = new THREE.Vector3();

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Simulate one step in Physics world
  world.step(1 / 60);

  const playerPos = player.getPosition();
  const playerAngle = player.getAngle();
  playerBox.position.set(playerPos.x, playerPos.y, playerBox.position.z);
  playerBox.rotation.z = playerAngle;

  const testPos = testBody.getPosition();
  const testAngle = testBody.getAngle();
  testBox.position.set(testPos.x, testPos.y, testBox.position.z);
  testBox.rotation.z = testAngle;

  const hammerPos = hammer.getPosition();
  const hammerAngle = player.getAngle();
  hammerBox.position.set(hammerPos.x, hammerPos.y, hammerBox.position.z);
  hammerBox.rotation.z = hammerAngle;

  // Directly setting position causes the body to ignore collisions. Do NOT use
  // hammer.setPosition(Vec2(pos.x, pos.y));

  let target = new Vec2(pos.x, pos.y);
  hammer.setLinearVelocity(target.sub(hammer.getPosition()).mul(20));

  renderer.render(scene, camera);
}

window.onmousemove = function (e) {
  let vec = new THREE.Vector3();
  // let pos = new THREE.Vector3();

  // Normalize screen coordinates between the range -1 to +1
  vec.set(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1,
    0.5
  );
  vec.unproject(camera);
  vec.sub(camera.position).normalize();

  let distance = -camera.position.z / vec.z;
  pos.copy(camera.position).add(vec.multiplyScalar(distance));

  console.log(vec);
};

window.onscroll = function (e) {};

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
