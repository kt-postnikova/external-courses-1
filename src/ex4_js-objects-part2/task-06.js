module.exports = function setUpperCase(string) {
  const array = string.split(' ');
  const upperCaseArray = array.map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
  return upperCaseArray.join(' ');
};
