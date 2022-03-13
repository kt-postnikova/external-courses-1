module.exports = function checkValue(value, object) {
  if (Object.keys(object).length === 0) {
    return false;
  }

  return value in object;
};
