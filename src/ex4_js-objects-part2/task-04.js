module.exports = function setUpperCaseString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
};
