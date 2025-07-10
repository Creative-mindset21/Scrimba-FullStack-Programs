const convertBtn = document.getElementById("convert-btn");
const boxValue = document.getElementById("box");
const meterFeet = document.getElementById("meter-feet");
const litresGallons = document.getElementById("litres-gallons");
const kgPounds = document.getElementById("kg-pounds");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//! FUNCTION TO CHANGE THE VALUES BASED ON THE UNIT
function changeValue(from, to, amount) {
  if (from === "meter" && to === "feet") {
    return `${amount} meters = ${(amount * 3.281).toFixed(
      3
    )} feet | ${amount} feet = ${(amount / 3.281).toFixed(3)} meters`;
  } else if (from === "litres" && to === "gallons") {
    return `${amount} litres = ${(amount * 0.264).toFixed(
      3
    )} gallons | ${amount} gallons = ${(amount / 0.264).toFixed(3)} litres`;
  } else if (from === "kg" && to === "pounds") {
    return `${amount} kilos = ${(amount * 2.204).toFixed(
      3
    )} pounds | ${amount} pounds = ${(amount / 2.204).toFixed(3)} kilos`;
  }
}

function renderValue() {
  let value = Number(boxValue.value);

  meterFeet.innerHTML = changeValue("meter", "feet", value);
  litresGallons.innerHTML = changeValue("litres", "gallons", value);
  kgPounds.innerHTML = changeValue("kg", "pounds", value);
}

convertBtn.addEventListener("click", renderValue);
boxValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    renderValue();
  }
});
