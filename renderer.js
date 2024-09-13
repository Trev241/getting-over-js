export const renderObj = (rObj, sprite, ignoreOffset) => {
  let rObjTranslation = rObj.translation();

  let drawX = rObjTranslation.x;
  let drawY = -rObjTranslation.y;

  if (!ignoreOffset) {
    drawX -= sprite.width / 2;
    drawY -= sprite.height / 2;
  }

  // Apply translation
  sprite.position.set(drawX, drawY);

  // Apply rotation
  sprite.rotation = rObj.rotation();
};
