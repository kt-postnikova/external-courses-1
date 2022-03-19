module.exports = function addValue(str, substr, number) {
  const array = str.split(' ');
  array.splice(number + 1, 0, substr);
  return array.join(' ');
};
