function Hangman(word) {
  this.word = word;
  this.guessedArray = new Array(this.word.length);
  this.attemptsLeft = 6;
  this.wrongLetters = [];

  this.guessedString = Array.from(this.guessedArray, (item) => item || '_').join('');

  function getString(array) {
    const guessedString = Array.from(array, (item) => item || '_').join('');
    return guessedString;
  }

  this.guess = function (letter) {
    if (this.word.includes(letter)) {
      for (let l = 0; l < this.word.length; l += 1) {
        if (this.word[l] === letter) {
          this.guessedArray[l] = letter;
        }
      }
    } else {
      this.attemptsLeft -= 1;
      this.wrongLetters.push(letter);
      return `wrong letter, errors left ${this.countCalls} | ${this.wrongLetters}`;
    }
    const guessedString = getString(this.guessedArray);
    if (this.word === guessedString) {
      console.log(`${guessedString} | You won!`);
    } else {
      console.log(guessedString);
    }
    return this;
  };

  this.getGuessedString = function () {
    const guessedString = getString(this.guessedArray);
    console.log(guessedString);
    return this;
  };

  this.getErrorsLeft = function () {
    console.log(this.attemptsLeft);
    return this;
  };

  this.getWrongSymbols = function () {
    console.log(this.wrongLetters);
    return this;
  };

  this.getStatus = function () {
    const guessedString = getString(this.guessedArray);
    console.log(`${guessedString} | errors left ${this.attemptsLeft}`);
    return this;
  };

  this.startAgain = function (newWord) {
    this.word = newWord;
    this.guessedArray = new Array(this.word.length);
    this.wrongLetters = [];
    console.log(this.word);
    return this;
  };
}

const hangman = Hangman();
module.exports = hangman;
