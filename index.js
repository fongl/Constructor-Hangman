var Word = require("./word.js");
var inq = require("inquirer");
var words = [];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var rand;
function populateBank() {
  let wordBank = [
    { word: "HTML", hint: "standard markup language for creating Web pages." },
    { word: "CSS", hint: "describes how HTML elements are to be displayed." },
    { word: "JAVASCRIPT", hint: "programming language of HTML and the Web." },
    { word: "BOOTSTRAP", hint: "popular open source toolkit for developing." },
    {
      word: "ARRAYS",
      hint: "special variable,can hold more than one value at a time."
    },
    { word: "OBJECT", hint: "collection of related  variables and functions." },
    { word: "METHOD", hint: "actions that can be performed on objects." },
    {
      word: "FUNCTION",
      hint: "block of code designed to perform a particular task."
    },
    {
      word: "SCOPE",
      hint: "region of a computer program where the binding is valid."
    },
    {
      word: "SYNTAX",
      hint:
        "specifies how symbols should be arranged to form correctly structured programs."
    }
  ];
  for (var i = 0; i < wordBank.length; i++) {
    words[i] = new Word(wordBank[i].word);
  }
}

function nextWord() {
  guessed = [];
  rand = Math.floor(Math.random() * words.length);
  console.log(words[rand].display());
  ask();
}

function ask() {
  console.log("Letters already guessed: " + guessed);
  inq
    .prompt([
      {
        type: "input",
        message: "Guess a letter please",
        name: "char"
      }
    ])
    .then(function(inq) {
      var lowGuess = inq.char.toUpperCase();
      if (typeof inq.char != "string" || inq.char.length != 1) {
        console.log("invalid input");
        ask();
      } else if (alphabet.indexOf(lowGuess) == -1) {
        console.log("invalid input");
        ask();
      } else if (guessed.indexOf(lowGuess) != -1) {
        console.log("already guessed that one");
        ask();
      } else {
        guessed.push(lowGuess);
        words[rand].guess(lowGuess);
        console.log(words[rand].display());
        let temp = words[rand].display();
        if (temp.indexOf("_") == -1) {
          console.log("YOU GOT THE WORD!");
          words.splice(rand, 1);
          if (words.length < 1) {
            console.log("YOU BEAT THE GAME");
            return;
          } else {
            nextWord();
          }
        } else {
          ask();
        }
      }
    });
}

populateBank();
nextWord();
