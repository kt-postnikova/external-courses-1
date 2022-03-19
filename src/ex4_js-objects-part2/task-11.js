module.exports = function countLogs(string) {
  const lettersObj = {};
  string.split('').forEach((letter) => {
    lettersObj[letter] = (lettersObj[letter] || 0) + 1;
  });
  const lettersArr = Object.entries(lettersObj);
  lettersArr.forEach((letter) => {
    console.log(letter.join(': '));
  });
};
