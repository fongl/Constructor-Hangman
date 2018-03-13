var Letter = require("./letter.js");

function Word(input) {
  this.letterArray = [];
  for (var i = 0; i < input.length; i++) {
    this.letterArray[i] = new Letter(input.charAt(i));
  }
  this.display = () => {
    var displayArray = [];
    for (var i = 0; i < this.letterArray.length; i++) {
      displayArray.push(this.letterArray[i].show());
    }
    return displayArray.join(",");
  };
  this.guess = input => {
    for (var i = 0; i < this.letterArray.length; i++) {
      this.letterArray[i].guess(input);
    }
  };
}

module.exports = Word;