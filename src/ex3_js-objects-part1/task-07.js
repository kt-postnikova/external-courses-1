module.exports = function copyObject(object) {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (object instanceof Array) {
    return object.reduce((arr, item, i) => {
      const newArray = arr;
      newArray[i] = copyObject(item);
      return newArray;
    }, []);
  }

  if (object instanceof Object) {
    return Object.keys(object).reduce((obj, key) => {
      const newObject = obj;
      newObject[key] = copyObject(object[key]);
      return newObject;
    }, {});
  }

  return null;
};
