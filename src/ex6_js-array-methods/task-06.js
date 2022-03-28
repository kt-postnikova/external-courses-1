module.exports = function reduceArray(array, callback, initialValue) {
  let result;
  let i = 0;
  if (initialValue === undefined) {
    result = array[i];
    i += 1;
  } else {
    result = initialValue;
  }
  for (; i < array.length; i += 1) {
    result = callback(result, array[i], i, array);
  }
  return result;
};
