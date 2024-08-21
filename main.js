import RAPIER from "@dimforge/rapier2d";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { renderObj } from "./renderer";

const RAD2DEG = 180 / Math.PI;
const DEG2RAD = Math.PI / 180;

let angleCursor;
let angleActual;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

var vec = new THREE.Vector3(); // create once and reuse
var pos = new THREE.Vector3(); // create once and reuse

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Physics Engine
let world = new RAPIER.World({ x: 0.0, y: -9.81 });

// Creating the ground
const groundGeo = new THREE.BoxGeometry(100, 0.5, 1);
const groundMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
const groundObj = new THREE.Mesh(groundGeo, groundMat);
scene.add(groundObj);

let groundRb = world.createRigidBody(RAPIER.RigidBodyDesc.fixed());
let groundCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(100, 0.5),
  groundRb
);

// Creating the player
const playerGeo = new THREE.BoxGeometry(1, 1, 1);
const playerMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const playerObj = new THREE.Mesh(playerGeo, playerMat);
scene.add(playerObj);

let playerRb = world.createRigidBody(
  new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
    .setTranslation(0.0, 0.0)
    // .setRotation(5.0
    // .setLinvel(1.0, 0)
    // .setAngvel(2.0)
    // .setGravityScale(0)
    .setCanSleep(true)
    .setCcdEnabled(true)
);
let playerCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(1.0, 1.0).setCollisionGroups(0x00010000),
  playerRb
);
playerCd.setMass(20.0);

// // Creating the hammer
const hammerGeo = new THREE.BoxGeometry(1, 1, 1);
const hammerMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const hammerObj = new THREE.Mesh(hammerGeo, hammerMat);
scene.add(hammerObj);

let hammerRb = world.createRigidBody(
  new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
    .setTranslation(-3, 2.0)
    .setGravityScale(0)
    .setCanSleep(true)
    .setCcdEnabled(true)
);
let hammerCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(1.0, 1.0).setCollisionGroups(0x00010000),
  hammerRb
);
hammerCd.setMass(0.001);

// Creating the intermediate object
const intermediateGeo = new THREE.BoxGeometry(6, 0.5, 0.25);
const intermediateMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const intermediateObj = new THREE.Mesh(intermediateGeo, intermediateMat);
intermediateObj.position.z = 0.5;
scene.add(intermediateObj);

let intermediateRb = world.createRigidBody(
  new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
    .setTranslation(0.0, 0.0)
    // .setAdditionalMass(500)
    // .setAngvel(100)
    .setCanSleep(true)
    .setCcdEnabled(true)
);
let intermediateCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(3, 0.25)
    // .setCollisionGroups(0x00010000)
    .setTranslation(0.0, 0),
  intermediateRb
);

// Creating the handle
// const handleGeo = new THREE.BoxGeometry(3, 0.25, 0.25);
// const handleMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
// const handleObj = new THREE.Mesh(handleGeo, handleMat);
// handleObj.position.z = 0.5;
// scene.add(handleObj);

// const handleRb = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic());
// const handleCd = world.createCollider(
//   RAPIER.ColliderDesc.cuboid(3, 1).setSensor(true),
//   hammerRb
// );

// Creating the revolute joint
let revoluteJoint = world.createImpulseJoint(
  RAPIER.JointData.revolute({ x: 0.0, y: 0.0 }, { x: -3.0, y: 0.0 }),
  playerRb,
  intermediateRb,
  true
);
revoluteJoint.configureMotorModel(RAPIER.MotorModel.ForceBased);
// revoluteJoint.configureMotorVelocity(-200.0, 20.0);
// revoluteJoint.configureMotorPosition(-400, 100, 1);

// Create the prismatic joint
let params = RAPIER.JointData.prismatic(
  { x: 0.0, y: 0.0 },
  { x: 0.0, y: 0.0 },
  { x: 1.0, y: 0.0 }
);
params.limitsEnabled = true;
params.limits = [-2, 2];
let prismaticJoint = world.createImpulseJoint(
  params,
  hammerRb,
  intermediateRb,
  true
);
// prismaticJoint.configureMotorModel(RAPIER.MotorModel.AccelerationBased);

function animate() {
  // Execute one step in the Physics world
  world.step();

  renderObj(playerRb, playerObj);
  renderObj(hammerRb, hammerObj);
  renderObj(groundRb, groundObj);
  // renderObj(handleRb, handleObj);
  renderObj(intermediateRb, intermediateObj);

  // prismaticJoint.configureMotorPosition(5, 1000, 100);

  angleActual = intermediateCd.rotation();
  // intermediateRb.setRotation(angleCursor, true);
  let angleError = angleCursor - angleActual;
  while (angleError < -180 * DEG2RAD) angleError += 360 * DEG2RAD;
  while (angleError > 180 * DEG2RAD) angleError -= 360 * DEG2RAD;
  intermediateRb.setAngvel(angleError * 5, true);

  const playerPos = playerRb.translation();
  camera.position.x = playerPos.x;
  camera.position.y = playerPos.y;

  // Render
  renderer.render(scene, camera);
}

if (WebGL.isWebGL2Available()) {
  // Initiate function or other initializations here
  renderer.setAnimationLoop(animate);
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById("container").appendChild(warning);
}

window.addEventListener("mousemove", (e) => {
  vec.set(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1,
    0.5
  );

  vec.unproject(camera);
  vec.sub(camera.position).normalize();
  var distance = -camera.position.z / vec.z;
  pos.copy(camera.position).add(vec.multiplyScalar(distance));

  const playerPos = playerRb.translation();
  const hammerPos = hammerRb.translation();

  angleCursor = Math.atan2(pos.y - playerPos.y, pos.x - playerPos.x);
});
