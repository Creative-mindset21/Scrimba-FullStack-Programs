const homeBox = document.getElementById("home-box");
const guestBox = document.getElementById("guest-btn");

let homeCount = 0;
let guestCount = 0;

/* FUNCTION TO UPDATE THE COUNT OF THE HOME AND GUEST SCORE */
function homeIncreaseCount(amount) {
  homeCount += amount;
  homeBox.textContent = homeCount;
}
function guestIncreaseCount(amount) {
  guestCount += amount;
  guestBox.textContent = guestCount;
}
