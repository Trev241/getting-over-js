import RAPIER from "https://cdn.skypack.dev/@dimforge/rapier2d-compat";

import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { renderObj } from "./renderer";

// FPS vars
let stop = false;
let frameCount = 0;
let fps, fpsInterval, startTime, now, then, elapsed;

const lerpTime = 0.1;
const RENDER_SCALE_FACTOR = 150;

// Mouse properties
let movementX;
let movementY;
let clientX;
let clientY;
let mouseTimeout;
let mousePos = { x: 0, y: 0 };

RAPIER.init().then(async () => {
  const app = new PIXI.Application();
  await app.init({ width: window.innerWidth, height: window.innerHeight });
  document.body.appendChild(app.canvas);

  // create viewport
  const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,

    events: app.renderer.events, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
  });

  // add the viewport to the stage
  app.stage.addChild(viewport);

  // activate plugins
  viewport.drag().pinch().wheel().decelerate();

  // Set viewport scale
  viewport.scale.set(75, 75);

  let angleCursor;
  let cursorDistance;
  let hammerConnected;
  let gravityTimeout;

  // Physics Engine
  let world = new RAPIER.World({ x: 0.0, y: -9.81 });

  // Creating the ground
  const groundW = 20;
  const groundH = 1;
  const groundX = 0;
  const groundY = -3;

  const groundSprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
  groundSprite.tint = 0xff0000;
  groundSprite.width = groundW;
  groundSprite.height = groundH;

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

  const playerSprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
  playerSprite.tint = 0xffff00;
  playerSprite.width = playerW;
  playerSprite.height = playerH;
  // playerSprite.anchor.set(0.5);

  let playerRb = world.createRigidBody(
    new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
      .setTranslation(0.0, 0.0)
      .setCanSleep(true)
      .setCcdEnabled(true)
  );
  playerRb.lockRotations(true, true);

  let playerCd = world.createCollider(
    RAPIER.ColliderDesc.cuboid(playerW / 2.0, playerH / 2.0)
      .setRestitution(0)
      .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min)
      .setCollisionGroups(0x00010002),
    playerRb
  );

  // Creating the hammer
  const hammerS = 0.25;

  const hammerSprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
  hammerSprite.tint = 0x0000ff;
  hammerSprite.width = hammerS;
  hammerSprite.height = hammerS;
  hammerSprite.anchor.set(0.5);

  let hammerRb = world.createRigidBody(
    new RAPIER.RigidBodyDesc(RAPIER.RigidBodyType.Dynamic)
      .setTranslation(0.0, 0.0)
      .setGravityScale(0)
      .setCanSleep(true)
      .setCcdEnabled(true)
  );
  let hammerCd = world.createCollider(
    RAPIER.ColliderDesc.cuboid(hammerS / 2.0, hammerS / 2.0)
      .setCollisionGroups(0x00010002)
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS),
    hammerRb
  );

  const debugSprite = viewport.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
  debugSprite.tint = 0x0000ff;
  debugSprite.width = 1;
  debugSprite.height = 1;
  debugSprite.position.set(-20, 0);

  // Creating the intermediate object
  let hammerLength = 1.75;

  let ropeJoint = world.createImpulseJoint(
    RAPIER.JointData.rope(hammerLength, { x: 0, y: 0 }, { x: 0, y: 0 }),
    playerRb,
    hammerRb
  );

  // Tweaking constraints
  const playerGravity = 7.5;
  playerCd.setMass(1.0);
  playerRb.setGravityScale(playerGravity);

  /* We do not want the hammer to be too heavy.
   *  1.  A heavy hammer will drag the player with its mass.
   *  2.  A heavy hammer requires more force to move.
   */
  const hammerMass = 1e-5;
  hammerCd.setMass(hammerMass);
  hammerCd.setFriction(2500);
  hammerRb.lockRotations(true, true);
  // hammerCd.setRestitution(0);
  // hammerCd.setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Min);

  /* We do not want a heavy handle for the same reason we do not
   * want a heavy hammer.
   */
  // intermediateCd.setMass(1e-6);

  fps = 60;
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;

  app.ticker.add(() => {
    now = Date.now();
    elapsed = now - then;

    // Make the camera follow the player
    const playerPos = playerRb.translation();
    // let viewportTargetX = viewport.width / 2.0 - playerPos.x * viewport.scale.x;
    // let viewportTargetY = playerPos.y * viewport.scale.y;

    // viewport.position.x += (viewportTargetX - viewport.position.x) * lerpTime;
    // viewport.position.y = viewportTargetY;

    viewport.follow(playerSprite, { speed: 0.25 });

    // Calculate the distance and angle of the cursor with respect to the player
    cursorDistance = Math.hypot(
      mousePos.y - playerPos.y,
      mousePos.x - playerPos.x
    );
    angleCursor = Math.atan2(
      mousePos.y - playerPos.y,
      mousePos.x - playerPos.x
    );

    // Convert the screen coordinates of the mouse into world coordinates

    const playerLinvel = playerRb.linvel();
    const maxPlLinvelX = 15.0;
    const maxPlLinvelY = 17.5;
    playerRb.setLinvel(
      {
        x: Math.min(maxPlLinvelX, Math.max(-maxPlLinvelX, playerLinvel.x)),
        y: Math.min(maxPlLinvelY, playerLinvel.y), // We do not want to limit the affect of gravity
      },
      true
    );

    const hammerPos = hammerRb.translation();
    const hammerForceMultiplier = 10.0;

    // Check how far the hammer is allowed to go for a given angle
    const maximumX = hammerLength * Math.cos(angleCursor) + playerPos.x;
    const maximumY = hammerLength * Math.sin(angleCursor) + playerPos.y;

    let targetX = mousePos.x;
    let targetY = mousePos.y;

    if (cursorDistance > hammerLength) {
      targetX = maximumX;
      targetY = maximumY;
    }

    const hammerVelX = (targetX - hammerPos.x) * hammerForceMultiplier;
    const hammerVelY = (targetY - hammerPos.y) * hammerForceMultiplier;
    hammerRb.setLinvel({ x: hammerVelX, y: hammerVelY }, true);

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      let eventQueue = new RAPIER.EventQueue(true);
      world.step(eventQueue);
      eventQueue.drainCollisionEvents((handle1, handle2, started) => {
        if (hammerRb.handle == handle2) {
          hammerConnected = started;

          if (started) {
            /* Turn off gravity and cancel all downward vertical movement when the hammer is grounded.
             * This will prevent the hammer from clipping into ground and makes movement
             * more consistent and predictable.
             */
            clearTimeout(gravityTimeout);
            playerRb.setGravityScale(0);
            hammerCd.setMass(5.0);
          } else {
            // Reset gravity after a delay
            gravityTimeout = setTimeout(
              () => playerRb.setGravityScale(playerGravity),
              fpsInterval
            );
            hammerCd.setMass(hammerMass);
          }
        }
      });

      if (hammerConnected) {
        /* Using the difference between the mouse's last world position
         * and its current position is not a good method. This is because
         * the camera is constantly following the player which means even
         * a stationery mouse will still report a difference owing to the
         * camera's movement.
         */

        const factorX = 1.75;
        const factorY = 1.75;
        let forceX = 0;

        forceX = -movementX * factorX;

        if (movementY > 12.5) hammerCd.setMass(hammerMass);

        // playerRb.applyImpulse(
        //   { x: forceX, y: Math.max(0, movementY * factorY) },
        //   true
        // );
        playerRb.setLinvel({ x: forceX, y: movementY * factorY });
      }

      renderObj(playerRb, playerSprite);
      renderObj(hammerRb, hammerSprite, true);
      renderObj(groundRb, groundSprite);
      // renderObj(intermediateRb, intermediateObj);

      // Render
      // renderer.render(scene, camera);
    }
  });

  viewport.addEventListener("mousemove", (e) => {
    // The mouse's world position MUST BE UPDATED EVERY FRAME.
    // As it stands, the mouse position is only updated when the mouse is moved.
    // If the camera moves, the mouse's world position and screen position will
    // NOT ALIGN leading to an inconsistency.

    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
      movementX = 0;
      movementY = 0;
    }, fpsInterval);

    movementX = e.movementX;
    movementY = e.movementY;
    clientX = e.clientX;
    clientY = e.clientY;

    // World space coordinates depend on the viewport's current transform and scale
    mousePos.x = (clientX - viewport.x) / viewport.scale.x;
    mousePos.y = (viewport.y - clientY) / viewport.scale.y;
  });
});
