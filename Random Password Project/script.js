const generateBtn = document.getElementById("generate-btn");
const isNumbers = document.getElementById("numbers");
const isSymbols = document.getElementById("symbols");
const letters = [
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
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password = "";

generateBtn.addEventListener("click", () => {
  const selectedArray = [];

  while (selectedArray.length < 9) {
    selectedArray.push(letters[Math.floor(Math.random() * letters.length)]);

    if (isNumbers.checked && selectedArray.length < 9) {
      selectedArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (isSymbols.checked && selectedArray.length < 9) {
      selectedArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  }
});
