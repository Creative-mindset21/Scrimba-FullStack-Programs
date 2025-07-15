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

document.addEventListener("click", (e) => {
  const dataId = e.target.closest(".card-right").getAttribute("data-id");
});

cardsContainer.innerHTML = htmlString;
