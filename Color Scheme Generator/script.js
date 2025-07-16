const colorInput = document.getElementById("select-color");
const colorScheme = document.getElementById("color-scheme");
const URL = "https://www.thecolorapi.com/scheme";
const boxes = document.querySelectorAll(".box");

function generateColorScheme() {
  let value = colorInput.value.split("#")[1];
  let scheme = colorScheme.value;
  let count = 5;
  let params = `hex=${value}&mode=${scheme}&count=${count}`;

  fetch(`${URL}?${params}`).then((response) =>
    response.json().then((data) => {
      const colors = data.colors;
      colors.forEach((color, i) => {
        boxes[i].style.background = color.hex.value;
      });
    })
  );
}

generateColorScheme();

document
  .getElementById("color-btn")
  .addEventListener("click", generateColorScheme);
