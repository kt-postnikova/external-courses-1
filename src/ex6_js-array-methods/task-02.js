module.exports = function findSome(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) {
      return true;
    }
  }
  return false;
};
