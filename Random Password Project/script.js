const generateBtn = document.getElementById("generate-btn");
const isNumbers = document.getElementById("numbers");
const isSymbols = document.getElementById("symbols");
const progressBar = document.getElementById("progress-bar");
const progressLabel = document.getElementById("progress-label");

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

displayRange();

function displayRange() {
  /* FUNCTION TO DISPLAY THE ACTUAL RANGE WHEN LOADED */
  progressLabel.textContent = progressBar.value;
}

progressBar.addEventListener("input", () => {
  displayRange();
});

function generateRandomPassword() {
  /* FUNCTION TO GENERATE RANDOM PASSWORDS */
  let password = "";
  const selectedArray = [];

  while (selectedArray.length < Number(progressBar.value)) {
    selectedArray.push(letters[Math.floor(Math.random() * letters.length)]);

    if (isNumbers.checked && selectedArray.length < Number(progressBar.value)) {
      selectedArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (isSymbols.checked && selectedArray.length < Number(progressBar.value)) {
      selectedArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  }

  password = selectedArray.join("");
  return password;
}

/* UPDATE THE PASSWORD WHEN THE BUTTON IS CLICKED */
generateBtn.addEventListener("click", () => {
  document.getElementById("output-1").textContent = generateRandomPassword();
  document.getElementById("output-2").textContent = generateRandomPassword();
});
