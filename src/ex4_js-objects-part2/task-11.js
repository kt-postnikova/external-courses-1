module.exports = function countLogs(string) {
  const newString = new Set(string);
  for (let i = 0; i < newString.size; i += 1) {
    console.log();
  }
};
