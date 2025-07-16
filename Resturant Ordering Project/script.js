import { menuArray } from "./data.js";

const cardsContainer = document.getElementById("cards");
const wrapper = document.getElementById("order-details");
const orderEl = document.querySelector(".order");

let htmlString = "";

menuArray.forEach((menu) => {
  let { name, ingredients, id, price, emoji } = menu;
  htmlString += `
        <div class="card">
            <div class="card-left">
              <p class="image">${emoji}</p>
              <div class="text">
                <h2>${name}</h2>
                <small>${ingredients.join(", ")}</small>
                <p>$${price}</p>
              </div>
            </div>

            <button class="card-right" data-id=${id}>
              <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    `;
});

cardsContainer.innerHTML = htmlString;
let selectedItems = [];

document.addEventListener("click", (e) => {
  if (e.target.closest(".card-right")) {
    const dataId = e.target.closest(".card-right").getAttribute("data-id");

    let selectedItem = menuArray[dataId];
    let orderString = "";

    if (selectedItem) {
      selectedItems.push(selectedItem);

      let totalPrice = 0;

      selectedItems.forEach((item) => {
        orderString += `
        <div class="detail">
            <div class="detail-left">
                <h2>${item.name}</h2>
                <small role="button">remove</small>
            </div>

            <p>$${item.price}</p>
        </div>
    `;
      });

      orderString += `
         <hr />

         <div class="total">
             <h2>Total price:</h2>
             <p>$14</p>
         </div>
        `;
    }

    orderEl.style.display = "flex";
    wrapper.innerHTML += orderString;
  }
});
