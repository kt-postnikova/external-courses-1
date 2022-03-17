module.exports = function getCamelCase(string) {
  const camelCaseArray = string.split(' ').map((word) => {
    const camelCaseWord = word.toLowerCase();
    return `${camelCaseWord[0].toUpperCase()}${camelCaseWord.slice(1)}`;
  });
  const camelCaseString = camelCaseArray.join('');
  return `${camelCaseString.slice(0, 1).toLowerCase()}${camelCaseString.slice(1)}`;
};
