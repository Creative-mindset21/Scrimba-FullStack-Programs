import { menuArray } from "./data.js";

const cardsContainer = document.getElementById("cards");
let htmlString = "";

menuArray.forEach((menu) => {
  let { name, ingredients, id, price, emoji } = menu;
  htmlString += `
        <div class="card">
            <div class="card-left">
              <p class="image">${emoji}</p>
              <div class="text">
                <h2>${name}</h2>
                <small>pepperoni,mushroom,mozzarella</small>
                <p>$${price}</p>
              </div>
            </div>

            <button class="card-right">
              <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    `;
});

cardsContainer.innerHTML = htmlString;
