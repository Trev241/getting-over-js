import RAPIER from "@dimforge/rapier2d";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { renderObj } from "./renderer";

const RAD2DEG = 180 / Math.PI;
const DEG2RAD = Math.PI / 180;

let angleCursor;
let angleActual;
let cursorDistance;

const hammerLength = 3;

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
let groundW = 100;
let groundH = 1;
let groundX = 0;
let groundY = -3;

const groundGeo = new THREE.BoxGeometry(groundW, groundH, 1);
const groundMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
const groundObj = new THREE.Mesh(groundGeo, groundMat);
scene.add(groundObj);

let groundRb = world.createRigidBody(
  RAPIER.RigidBodyDesc.fixed()
    .setTranslation(groundX, groundY)
    .setCcdEnabled(true)
);
let groundCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(groundW / 2.0, groundH / 2.0)
    .setCollisionGroups(0x00020001)
    .setRestitution(0)
    .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min),
  groundRb
);

// Creating the player
const playerW = 0.5;
const playerH = 1;

const playerGeo = new THREE.BoxGeometry(playerW, playerH, 1);
const playerMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const playerObj = new THREE.Mesh(playerGeo, playerMat);
scene.add(playerObj);

let playerRb = world.createRigidBody(
  new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
    .setTranslation(0.0, 0.0)
    // .setRotation(5.0
    // .setLinvel(1.0, 0)
    // .setAngvel(2.0)
    .setGravityScale(1)
    .setCanSleep(true)
    .setCcdEnabled(true)
);
playerRb.lockRotations(true, true);

let playerCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(playerW / 2.0, playerH / 2.0)
    .setTranslation(0.0, 0.0)
    .setRestitution(0)
    .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min)
    .setCollisionGroups(0x00010002),
  playerRb
);
playerCd.setMass(0.001);

// Creating the hammer
const hammerS = 0.25;

const hammerGeo = new THREE.BoxGeometry(hammerS, hammerS, 1);
const hammerMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const hammerObj = new THREE.Mesh(hammerGeo, hammerMat);
scene.add(hammerObj);

let hammerRb = world.createRigidBody(
  new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
    .setTranslation(0.0, 0.0)
    .setGravityScale(0)
    .setCanSleep(true)
    .setCcdEnabled(true)
);
let hammerCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(hammerS / 2.0, hammerS / 2.0)
    .setTranslation(0.0, 0.0)
    .setRestitution(0)
    .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min)
    .setCollisionGroups(0x00010002),
  hammerRb
);
hammerCd.setMass(0.00001);
// hammerCd.setFriction(1000);

// Creating the intermediate object
let intermediateW = 2;
let intermediateH = 0.125;

const intermediateGeo = new THREE.BoxGeometry(
  intermediateW,
  intermediateH,
  0.25
);
const intermediateMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const intermediateObj = new THREE.Mesh(intermediateGeo, intermediateMat);
intermediateObj.position.z = 0.5;
scene.add(intermediateObj);

let intermediateRb = world.createRigidBody(
  new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
    .setTranslation(0.0, 0.0)
    .setGravityScale(0)
    // .setAdditionalMass(500)
    // .setAngvel(100)
    .setCanSleep(true)
    .setCcdEnabled(true)
);

let intermediateCd = world.createCollider(
  RAPIER.ColliderDesc.cuboid(intermediateW / 2.0, intermediateH / 2.0)
    .setCollisionGroups(0x00010000)
    .setTranslation(0.0, 0),
  intermediateRb
);
intermediateCd.setMass(0.001);

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
  RAPIER.JointData.revolute(
    { x: 0.0, y: 0.0 },
    { x: -intermediateW / 2.0, y: 0.0 }
  ),
  playerRb,
  intermediateRb,
  true
);
revoluteJoint.configureMotorModel(RAPIER.MotorModel.ForceBased);
// revoluteJoint.configureMotorVelocity(-200.0, 20.0);
// revoluteJoint.configureMotorPosition(-400, 100, 1);

// Create the prismatic joint
// let params = RAPIER.JointData.prismatic(
//   { x: 0.0, y: 0.0 },
//   { x: intermediateW / 2.0, y: 0.0 }, // Note: Setting the anchor to the 2nd body's origin will set it to that the intermediate body's center
//   { x: 1.0, y: 0.0 }
// );
// params.limitsEnabled = true;
// params.limits = [0, intermediateW];
// let prismaticJoint = world.createImpulseJoint(
//   params,
//   hammerRb,
//   intermediateRb,
//   true
// );
// prismaticJoint.configureMotorModel(RAPIER.MotorModel.ForceBased);

// Creating a fixed joint
let fixedJoint = world.createImpulseJoint(
  RAPIER.JointData.fixed(
    { x: 0.0, y: 0.0 },
    0.0,
    { x: -(intermediateW / 2.0), y: 0.0 },
    0
  ),
  intermediateRb,
  hammerRb,
  true
);

function animate() {
  // Execute one step in the Physics world
  world.step();

  renderObj(playerRb, playerObj);
  renderObj(hammerRb, hammerObj);
  renderObj(groundRb, groundObj);
  // renderObj(handleRb, handleObj);
  renderObj(intermediateRb, intermediateObj);

  angleActual = intermediateCd.rotation();
  // intermediateRb.setRotation(angleCursor, true);
  let angleError = angleCursor - angleActual;
  while (angleError < -180 * DEG2RAD) angleError += 360 * DEG2RAD;
  while (angleError > 180 * DEG2RAD) angleError -= 360 * DEG2RAD;
  intermediateRb.setAngvel(angleError * 5, true);
  // revoluteJoint.configureMotorVelocity(angleError * 30, 300);

  console.log(cursorDistance);
  // prismaticJoint.configureMotorPosition(
  //   intermediateW - Math.min(cursorDistance, intermediateW),
  //   // 0,
  //   100000,
  //   100
  // );
  // prismaticJoint.configureMotorPosition(2, 1000, 10);
  revoluteJoint.setAnchor2({
    x: -Math.min(cursorDistance, intermediateW) / 2.0 + 0.5,
    y: 0.0,
  });

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

  cursorDistance = Math.hypot(pos.y - playerPos.y, pos.x - playerPos.x);
  angleCursor = Math.atan2(pos.y - playerPos.y, pos.x - playerPos.x);
});
