module.exports = function addNewValue(value, object) {
  const newObject = object;

  if (Object.keys(object).length === 0) {
    newObject[value] = 'new';
  }
  if (!(value in newObject)) {
    newObject[value] = 'new';
  }

  return newObject;
};
