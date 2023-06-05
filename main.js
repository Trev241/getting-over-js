import * as THREE from "three";
import * as planck from "planck";
import WebGL from "three/addons/capabilities/WebGL.js";
import { DEG2RAD, RAD2DEG } from "three/src/math/mathutils";

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
const HAMMER_LENGTH = 7.5;

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
  bullet = false,
  friction = 1.0,
  gravityScale = 1.0
) {
  const body = world.createBody({
    position: Vec2(xCor, yCor),
    type,
    fixedRotation,
    bullet,
    gravityScale,
  });
  body.createFixture({ shape: Box(width, height), density, friction });

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
  0.0,
  0x0000ff,
  "dynamic",
  0.001,
  true,
  false,
  1.0,
  30.0
);
const hammer = createBodyAndMesh(
  0.25,
  0.25,
  0.25,
  0.5,
  0.0,
  0x00ffff,
  "dynamic",
  0.0001,
  false,
  true,
  100.0,
  0.0
);

const connector = createBodyAndMesh(
  0.25,
  0.25,
  0.25,
  0.0,
  0.0,
  0x00ff00,
  "dynamic",
  1.0,
  false,
  false,
  1.0,
  0.0
);

// const joint = world.createJoint(
//   pl.RopeJoint({
//     bodyA: player.body,
//     bodyB: hammer.body,
//     maxLength: HAMMER_LENGTH,
//   })
// );

const test = createBodyAndMesh(1.0, 2.0, 1.0, -7.5, 20.0, 0xff0000, "dynamic");
const ground = createBodyAndMesh(
  100.0,
  0.125,
  1.0,
  0.0,
  -2.0,
  0x00ff00,
  "static"
);

const debugGeo = new THREE.SphereGeometry(0.5);
const debugMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const debugPoint1 = new THREE.Mesh(debugGeo, debugMat);
const debugPoint2 = new THREE.Mesh(debugGeo, debugMat);

scene.add(debugPoint1);
scene.add(debugPoint2);

player.body.setLinearDamping(1.5);

const revoluteJoint = world.createJoint(
  pl.RevoluteJoint(
    {
      maxMotorTorque: 10,
      enableMotor: false,
    },
    player.body,
    connector.body,
    player.body.getWorldCenter()
  )
);

const prismaticJoint = world.createJoint(
  pl.PrismaticJoint(
    {
      lowerTranslation: 0.0,
      upperTranslation: HAMMER_LENGTH,
      enableLimit: true,
      maxMotorForce: 10.0,
      motorSpeed: 0.0,
      enableMotor: true,
    },
    connector.body,
    hammer.body,
    hammer.body.getWorldCenter(),
    Vec2(1.0, 0.0)
  )
);

// const groundPos = convertBox2DToThree(ground.getPosition());
// groundBox.position.set(groundPos.x, groundPos.y, groundPos.z);

let mousePos = new THREE.Vector3();
let anchorPos = null;
let isMouseMoving = false;
let mouseIdleTimeout;
let mouseDx = 0;
let mouseDy = 0;
let normal = null;
let groundJoint = null;

let stop = false;
let frameCount = 0;
let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = window.performance.now();
  startTime = then;
  animate();
}

// Render loop
function animate() {
  requestAnimationFrame(animate);

  now = window.performance.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
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
    const hammerAngle = hammer.body.getAngle();
    hammer.mesh.position.set(hammerPos.x, hammerPos.y, 4);
    hammer.mesh.rotation.z = hammerAngle;

    const connectorPos = connector.body.getPosition();
    const connectorAngle = connector.body.getAngle();
    connector.mesh.position.set(connectorPos.x, connectorPos.y, 5);
    connector.mesh.rotation.z = connectorAngle;

    // // Directly setting position causes the body to ignore collisions. Do NOT use
    // // hammer.setPosition(Vec2(mousePos.x, mousePos.y));

    // const distance = Math.abs(
    //   Math.hypot(mousePos.x - playerPos.x, mousePos.y - playerPos.y)
    // );
    // const angle = Math.atan2(mousePos.y - playerPos.y, mousePos.x - playerPos.x);
    // const dest = Vec2(Math.cos(angle), Math.sin(angle))
    //   .mul(Math.min(HAMMER_LENGTH, distance))
    //   .add(playerPos);

    // hammer.body.setLinearVelocity(dest.sub(hammer.getPosition()).mul(75.0));
    // hammer.body.setAngle(angle + (90 * Math.PI) / 180);

    // if (anchorPos) {
    //   const MOUSE_DELTA_MODIFIER = 1.5;
    //   const MAX_LAUNCH_DISTANCE = 60.0;

    //   mouseDx *= MOUSE_DELTA_MODIFIER;
    //   mouseDy *= MOUSE_DELTA_MODIFIER;

    //   const extended = Math.abs(
    //     Math.hypot(hammerPos.x - playerPos.x, hammerPos.y - playerPos.y)
    //   );

    //   let x =
    //     playerPos.x -
    //     Math.max(Math.min(mouseDx, MAX_LAUNCH_DISTANCE), -MAX_LAUNCH_DISTANCE);
    //   let y =
    //     playerPos.y +
    //     Math.max(Math.min(mouseDy, MAX_LAUNCH_DISTANCE), -MAX_LAUNCH_DISTANCE);

    //   const dest = Vec2(x, y);
    //   player.body.setLinearVelocity(dest.sub(playerPos));
    // }

    // const angleTarget = 90.0 * DEG2RAD;

    // REVOLUTE JOINT CONTROLS
    const angleTarget = Math.atan2(
      mousePos.y - playerPos.y,
      mousePos.x - playerPos.x
    );

    const angleNext =
      revoluteJoint.getJointAngle() +
      connector.body.getAngularVelocity() / 60.0;
    let angleError = angleTarget - angleNext;
    while (angleError < -180 * DEG2RAD) angleError += 360 * DEG2RAD;
    while (angleError > 180 * DEG2RAD) angleError -= 360 * DEG2RAD;
    const desiredAngularVel = angleError * 60.0;
    const torque =
      (connector.body.getInertia() * desiredAngularVel) / (1 / 60.0);
    connector.body.applyTorque(torque);

    // PRISMATIC JOINT CONTROLS
    const translationTarget =
      Math.abs(Math.hypot(mousePos.x - playerPos.x, mousePos.y - playerPos.y)) -
      1.0;
    const translationError =
      translationTarget - prismaticJoint.getJointTranslation();
    prismaticJoint.setMotorSpeed(translationError * 50.0);

    // Make camera follow player
    camera.position.x = playerPos.x;
    camera.position.y = playerPos.y;

    renderer.render(scene, camera);
  }
}

world.on("pre-solve", function (contact) {
  const fixtureA = contact.getFixtureA();
  const fixtureB = contact.getFixtureB();
  const bodyA = fixtureA.getBody();
  const bodyB = fixtureB.getBody();

  if (
    (bodyA === hammer.body && bodyB === player.body) ||
    (bodyA === player.body && bodyB === hammer.body)
  ) {
    contact.setEnabled(false);
  }
});

world.on("end-contact", function (contact) {
  // const fixtureA = contact.getFixtureA();
  // const fixtureB = contact.getFixtureB();
  // const bodyA = fixtureA.getBody();
  // const bodyB = fixtureB.getBody();
  // // Identify hammer object
  // let hammerBody;
  // if (bodyA === hammer.body) hammerBody = bodyA;
  // else if (bodyB === hammer.body) hammerBody = bodyB;
  // else return;
  // anchorPos = null;
  // player.body.setGravityScale(10.0);
});

window.addEventListener("mousemove", function (e) {
  if (mouseIdleTimeout) this.clearTimeout(mouseIdleTimeout);

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

  // console.log(e.movementX + " " + e.movementY);
  // console.log(vec);

  mouseDx = e.movementX;
  mouseDy = e.movementY;

  // Timeout to detect if mouse is stationary
  mouseIdleTimeout = this.setTimeout(function () {
    isMouseMoving = false;
    mouseDx = 0;
    mouseDy = 0;
  }, 100);
});

window.addEventListener("wheel", function (e) {
  camera.position.z += e.deltaY / Math.abs(e.deltaY);
});

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  startAnimating(60.0);
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
