module.exports = function compareElements(array) {
  const nonDuplicateList = new Set(array);
  if (nonDuplicateList.size > 1) {
    return false;
  }
  return true;
};
