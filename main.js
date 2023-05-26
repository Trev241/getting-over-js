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

// Helper Function to create box
function createBodyAndMesh(width, height, depth, xCor, yCor, color, type) {
  const body = world.createBody({ position: Vec2(xCor, yCor), type });
  body.createFixture({ shape: Box(width, height), density: 1.0 });

  const geometry = new THREE.BoxGeometry(width * 2, height * 2, depth);
  const material = new THREE.MeshBasicMaterial({ color: color });
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

const player = createBodyAndMesh(
  playerDef.w,
  playerDef.h,
  playerDef.d,
  playerDef.x,
  playerDef.y,
  0x0000ff,
  "dynamic"
);
const test = createBodyAndMesh(
  playerDef.w,
  playerDef.h,
  playerDef.d,
  1.8,
  20.0,
  0xff0000,
  "dynamic"
);

let groundDef = {
  w: 20.0,
  h: 0.125,
  d: 1.0,
  x: 0.0,
  y: 0.0,
};

const ground = createBodyAndMesh(
  groundDef.w,
  groundDef.h,
  groundDef.d,
  groundDef.x,
  groundDef.y,
  0x00ff00,
  "static"
);

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
  // player.body.position.set(playerPos.x, playerPos.y, playerBox.position.z);
  player.mesh.position.set(playerPos.x, playerPos.y, player.mesh.position.z);
  playerBox.rotation.z = playerAngle;

  const testPos = test.body.getPosition();
  const testAngle = test.body.getAngle();
  test.mesh.position.set(testPos.x, testPos.y, test.mesh.position.z);
  test.mesh.rotation.z = testAngle;

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
