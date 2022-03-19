module.exports = function deleteSpace(string) {
  const array = string.split('');
  array.shift();
  array.pop();
  return array.join('');
};
