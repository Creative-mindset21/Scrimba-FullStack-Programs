const homeBox = document.getElementById("home-box");
const guestBox = document.getElementById("guest-btn");

let homeCount = 0;
let guestCount = 0;

/* FUNCTION TO UPDATE THE COUNT OF THE HOME AND GUEST SCORE */
function homeIncreaseCount(amount) {
  homeCount += amount;
  homeBox.textContent = homeCount;
  updateColor();
}
function guestIncreaseCount(amount) {
  guestCount += amount;
  guestBox.textContent = guestCount;
  updateColor();
}

function updateColor() {
  if (parseInt(homeBox.textContent) > parseInt(guestBox.textContent)) {
    homeBox.classList.add("green");
    guestBox.classList.remove("green");
  } else if (parseInt(homeBox.textContent) < guestBox.textContent) {
    guestBox.classList.add("green");
    homeBox.classList.remove("green");
  } else {
    // If scores are equal, remove both classes
    homeBox.classList.remove("green");
    guestBox.classList.remove("green");
  }
}
