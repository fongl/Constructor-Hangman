function Letter(input) {
  this.character = input;
  this.guessed = false;
  this.show = () => {
    if (this.guessed) {
      return this.character;
    }
    return "_";
  };    
  this.guess = input => {
    if (this.character == input) {
      this.guessed = true;
    }
  };
}
module.exports = Letter;