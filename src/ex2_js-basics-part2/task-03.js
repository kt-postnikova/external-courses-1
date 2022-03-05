module.exports = function filterArray(array) {
  const evenNumbers = array.filter((element) => {
    if (element % 2 === 0) {
      return element;
    }
    return 0;
  });
  const unevenNumbers = array.filter((element) => element % 2 !== 0);
  const zeroNumbers = array.filter((element) => element === 0);
  const newArr = [evenNumbers.length, unevenNumbers.length, zeroNumbers.length];

  return newArr;
};
