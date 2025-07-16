const colorInput = document.getElementById("select-color");
const colorScheme = document.getElementById("color-scheme");
const URL = "https://www.thecolorapi.com/scheme";
const boxes = document.querySelectorAll(".box");
const textValues = document.querySelectorAll(".value");

document
  .getElementById("color-btn")
  .addEventListener("click", generateColorScheme);

function generateColorScheme() {
  let colorObj = {
    value: colorInput.value.split("#")[1],
    scheme: colorScheme.value,
    count: 5,
  };

  let params = `hex=${colorObj.value}&mode=${colorObj.scheme}&count=${colorObj.count}`;

  fetch(`${URL}?${params}`).then((response) =>
    response.json().then((data) => {
      const colors = data.colors;
      colors.forEach((color, i) => {
        boxes[i].style.background = color.hex.value;
        textValues[i].textContent = color.hex.value;
      });
    })
  );
}

generateColorScheme();
