import { posts } from "./data.js";

let htmlString = "";

posts.forEach((post) => {
  htmlString += `
    <div class="card">
        <div class="profile-details">
            <img
            src="${post.avatar}"
            alt="Avatar image of ${post.name}"
            />

            <div>
            <h2>${post.name}</h2>
            <p>${post.location}</p>
            </div>
        </div>

        <img src="${post.post}" alt="Post Image of ${post.name}" />

        <div class="likes-comments">
            <div class="icons">
            <img src="./images/icon-heart.png" alt="Like Icon" />
            <img src="./images/icon-dm.png" alt="Dm Icon" />
            <img src="./images/icon-heart.png" alt="Heart Icon" />
            </div>
            <h3>${post.likes} likes</h3>

            <div class="comments">
            <p><span>${post.username}</span> just took a few mushrooms lol</p>
            </div>
        </div>
    </div>
    `;
});

document.getElementById("cards").innerHTML = htmlString;
