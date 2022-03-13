module.exports = function getProperty(object, propertyPath) {
  const keys = propertyPath.split('.');
  const firstKey = keys.shift();
  const objElement = object[firstKey];
  if (typeof objElement === 'object') {
    return getProperty(objElement, keys.join('.'));
  }

  if (keys.length) {
    return undefined;
  }
  return objElement;
};
