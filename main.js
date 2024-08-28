import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { renderObj } from "./renderer";
import RAPIER from "https://cdn.skypack.dev/@dimforge/rapier2d-compat";

let stop = false;
let frameCount = 0;
let fps, fpsInterval, startTime, now, then, elapsed;

RAPIER.init().then(() => {
  const RAD2DEG = 180 / Math.PI;
  const DEG2RAD = Math.PI / 180;

  let angleCursor;
  let angleActual;
  let cursorDistance;
  let usePrismaticJoint = true;

  let eventQueue = new RAPIER.EventQueue(true);
  eventQueue.drainCollisionEvents((handle1, handle2, started) => {
    /* Handle the collision event. */
    console.log("Collision detected");
  });

  eventQueue.drainContactForceEvents((event) => {
    let handle1 = event.collider1(); // Handle of the first collider involved in the event.
    let handle2 = event.collider2(); // Handle of the second collider involved in the event.
    /* Handle the contact force event. */
  });
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
      .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min)
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS),
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

  // Creating the hammer
  const hammerS = 0.25;

  const hammerGeo = new THREE.SphereGeometry(hammerS / 2.0);
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
    RAPIER.ColliderDesc.ball(hammerS / 2.0)
      .setTranslation(0.0, 0.0)
      .setRestitution(0)
      .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min)
      .setCollisionGroups(0x00010002)
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS),
    hammerRb
  );
  // hammerCd.setFriction(1000);

  // Creating the intermediate object
  let intermediateW = 1.75;
  let intermediateH = 0.125;
  let prismaticMinimumLimit = 0.3;

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

  // Create a revolute joint
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

  let prismaticJoint;
  if (usePrismaticJoint) {
    // Create the prismatic joint
    let params = RAPIER.JointData.prismatic(
      { x: 0.0, y: 0.0 },
      { x: intermediateW / 2.0, y: 0.0 }, // Note: Setting the anchor to the 2nd body's origin will set it to that the intermediate body's center
      { x: 1.0, y: 0.0 }
    );
    params.limitsEnabled = true;
    // 0 here represents the farthest it can go,
    // intermediateW would mean that the hammer is allowed to move up to the player's origin itself
    // But we take off a small length of it to avoid that to enforce a minimum reach.
    params.limits = [0, intermediateW - prismaticMinimumLimit]; // Suggestion: Maybe replace hard-coded constant?
    prismaticJoint = world.createImpulseJoint(
      params,
      hammerRb,
      intermediateRb,
      true
    );
    prismaticJoint.configureMotorModel(RAPIER.MotorModel.ForceBased);
  } else {
    // Attach the hammer to the intermediate body
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
  }

  // Tweaking constraints

  // Note: Increasing the mass will make it more difficult to move the player
  playerCd.setMass(0.01);
  playerRb.setGravityScale(4.5);

  // Note: Increasing the mass makes revolutions slower but
  // improves the effect of springing up
  hammerCd.setMass(0.001);
  hammerCd.setFriction(2500);

  // Note: Setting this mass too high will swing the whole player
  // while setting it too low will lower the quality of control
  intermediateCd.setMass(0.001);

  function animate() {
    now = Date.now();
    elapsed = now - then;

    const playerPos = playerRb.translation();

    camera.position.x += (playerPos.x - camera.position.x) * 0.15;
    camera.position.y += (playerPos.y - camera.position.y) * 0.15;

    angleActual = intermediateCd.rotation();
    // intermediateRb.setRotation(angleCursor, true);
    let angleError = angleCursor - angleActual;
    while (angleError < -180 * DEG2RAD) angleError += 360 * DEG2RAD;
    while (angleError > 180 * DEG2RAD) angleError -= 360 * DEG2RAD;
    // intermediateRb.setAngvel(angleError * 15, true);

    // console.log(angleCursor);
    // revoluteJoint.configureMotorVelocity(angleError, 100000);
    revoluteJoint.configureMotorPosition(angleCursor, 10.0, 0.85);
    // intermediateRb.setRotation(angleCursor, true);

    console.log(playerRb.linvel());
    const playerLinvel = playerRb.linvel();
    const maxPlrLinvel = 25;
    playerRb.setLinvel(
      {
        x: Math.min(maxPlrLinvel, Math.max(-maxPlrLinvel, playerLinvel.x)),
        y: Math.min(maxPlrLinvel, playerLinvel.y), // We do not want to limit the affect of gravity
      },
      true
    );

    if (usePrismaticJoint) {
      // Configure the prismatic joint to position the hammer

      // 0 is the furthest point away from the player.
      // This is why we apply the difference of the cursor's distance and the width of the intermediate body
      // We must clamp the position of the hammer by ensuring it does not go up to the player's origin.
      prismaticJoint.configureMotorPosition(
        Math.min(
          intermediateW - Math.min(cursorDistance, intermediateW),
          intermediateW - prismaticMinimumLimit
        ),
        // 0,
        20, // Note: If this value is too low, you will notice a spring effect when attempting to land on the hammer
        1
      );
    } else {
      // Directly set the anchor of the revolute joint to position the hammer
      revoluteJoint.setAnchor2({
        x: -Math.min(cursorDistance, intermediateW) / 2.0 + intermediateW / 4.0,
        y: 0.0,
      });
    }

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      world.step(eventQueue);

      renderObj(playerRb, playerObj);
      renderObj(hammerRb, hammerObj);
      renderObj(groundRb, groundObj);
      renderObj(intermediateRb, intermediateObj);

      // Render
      renderer.render(scene, camera);
    }
  }

  if (WebGL.isWebGL2Available()) {
    fps = 60;
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

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
});
