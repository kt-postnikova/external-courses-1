module.exports = function checkPrototypeValue(objName, object) {
  if (object.hasOwnProperty(objName)) {
    return undefined;
  }
  return object[objName];
};
