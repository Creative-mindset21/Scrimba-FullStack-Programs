import { posts } from "./data.js";

function renderHTML(posts) {
  let htmlString = "";

  posts.forEach((post, index) => {
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
            <img src="./images/icon-heart.png" alt="Like Icon" class="like-button" data-index="${index}"/>
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

    document.getElementById("cards").innerHTML = htmlString;

    updateLikes();
  });
}

function updateLikes() {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      posts[index].likes++;
      renderHTML(posts);
    });
  });
}

renderHTML(posts);
