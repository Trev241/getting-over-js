export const renderObj = (rObj, tObj) => {
  let rObjTranslation = rObj.translation();

  // Apply translation
  tObj.position.x = rObjTranslation.x;
  tObj.position.y = rObjTranslation.y;

  // Apply rotation
  tObj.rotation.z = rObj.rotation();
};
