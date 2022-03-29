module.exports = function sliceArray(array, begin, end) {
  const resultArray = [];

  let firstElement = begin;
  let lastElement = (end !== undefined) ? end - 1 : array.length - 1;

  if (begin === undefined) {
    return array;
  }

  if (begin < 0) {
    firstElement = array.length - Math.abs(begin);
  }

  if (end < 0) {
    lastElement = (array.length - Math.abs(end)) - 1;
  }

  for (let i = firstElement; i <= lastElement; i += 1) {
    if (array[i] !== undefined) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
};
