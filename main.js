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
const HAMMER_LENGTH = 5;

// Physics
let pl = planck,
  Vec2 = pl.Vec2,
  Box = pl.Box;

let world = pl.World({ gravity: Vec2(0.0, -10) });

// Helper Function to create box
function createBodyAndMesh(
  width,
  height,
  depth,
  xCor,
  yCor,
  color,
  type,
  density = 1.0,
  fixedRotation = false,
  bullet = false
) {
  const body = world.createBody({
    position: Vec2(xCor, yCor),
    type,
    fixedRotation,
    bullet,
  });
  body.createFixture({ shape: Box(width, height), density });

  const geometry = new THREE.BoxGeometry(
    width * SCALE_FACTOR,
    height * SCALE_FACTOR,
    depth
  );
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

const player = createBodyAndMesh(
  1.0,
  2.0,
  1.0,
  0.0,
  10.0,
  0x0000ff,
  "dynamic",
  100,
  true
);
const hammer = createBodyAndMesh(
  0.75,
  0.25,
  0.25,
  1.0,
  1.0,
  0x0000ff,
  "dynamic",
  0.01,
  false,
  true
);
const joint = world.createJoint(
  pl.RopeJoint({
    bodyA: player.body,
    bodyB: hammer.body,
    maxLength: HAMMER_LENGTH,
  })
);
const test = createBodyAndMesh(1.0, 2.0, 1.0, 1.8, 20.0, 0xff0000, "dynamic");
const ground = createBodyAndMesh(
  20.0,
  0.125,
  1.0,
  0.0,
  0.0,
  0x00ff00,
  "static"
);

// const groundPos = convertBox2DToThree(ground.getPosition());
// groundBox.position.set(groundPos.x, groundPos.y, groundPos.z);

let mousePos = new THREE.Vector3();

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Simulate one step in Physics world
  world.step(1 / 60);

  const playerPos = player.body.getPosition();
  const playerAngle = player.body.getAngle();
  // player.body.position.set(playerPos.x, playerPos.y, playerBox.position.z);
  player.mesh.position.set(playerPos.x, playerPos.y, player.mesh.position.z);
  player.mesh.rotation.z = playerAngle;

  const testPos = test.body.getPosition();
  const testAngle = test.body.getAngle();
  test.mesh.position.set(testPos.x, testPos.y, test.mesh.position.z);
  test.mesh.rotation.z = testAngle;

  const hammerPos = hammer.getPosition();
  const hammerAngle = player.body.getAngle();
  hammer.mesh.position.set(hammerPos.x, hammerPos.y, hammer.mesh.position.z);
  hammer.mesh.rotation.z = hammerAngle;

  // Directly setting position causes the body to ignore collisions. Do NOT use
  // hammer.setPosition(Vec2(mousePos.x, mousePos.y));

  const distance = Math.abs(
    Math.hypot(mousePos.x - playerPos.x, mousePos.y - playerPos.y)
  );
  const angle = Math.atan2(mousePos.y - playerPos.y, mousePos.x - playerPos.x);
  const dest = Vec2(Math.cos(angle), Math.sin(angle))
    .mul(Math.min(HAMMER_LENGTH, distance))
    .add(player.getPosition());

  hammer.body.setLinearVelocity(dest.sub(hammer.getPosition()).mul(50));

  renderer.render(scene, camera);
}

window.onmousemove = function (e) {
  let vec = new THREE.Vector3();
  // let mousePos = new THREE.Vector3();

  // Normalize screen coordinates between the range -1 to +1
  vec.set(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1,
    0.5
  );
  vec.unproject(camera);
  vec.sub(camera.position).normalize();

  let distance = -camera.position.z / vec.z;
  mousePos.copy(camera.position).add(vec.multiplyScalar(distance));

  // console.log(vec);
};

window.addEventListener("wheel", function (e) {
  camera.position.z += e.deltaY / Math.abs(e.deltaY);
});

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
