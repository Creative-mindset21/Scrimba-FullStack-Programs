const trendingCards = document.getElementById("trending-cards");
const popularCards = document.getElementById("popular-cards");

const TMDB_API = "9f495d6971e6aea88ce74db1d07ab951";

const TRENDING_URL =
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
const POPULAR_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const IMAGE_URL = "https://image.tmdb.org/t/p/w185/";

/* RENDER TRENDING MOVIES */
function renderTrendingMovies(arr) {
  let html = "";
  const noMovie = "./assets/no-movie.png";

  arr.forEach((movie, index) => {
    const moviePath = movie.poster_path
      ? `${IMAGE_URL}${movie.poster_path}`
      : noMovie;
    html += `
        <div class="trending-card">
            <div class="content">
              <p class="number">${index + 1}</p>
              <img src="${moviePath}" alt="Movie Poster of ${
      movie.title
    }" title="${movie.title}"/>
            </div>

            <div class="texts">
              <h3>${movie.title}</h3>

              <div class="ratings">
                <img src="./assets/star.svg" alt="Star Icon" class="star" />
                <span class="rate">${movie.vote_average.toFixed(1)} • </span>
                <span class="lang">${movie.original_language} • </span>
                <span class="year">${movie.release_date}</span>
              </div>
            </div>
          </div>
    `;
    trendingCards.innerHTML = html;
  });
}

/* RENDER POPULAR MOVIES */
function renderPopularMovies(arr) {
  let html = "";
  const noMovie = "./assets/no-movie.png";

  arr.forEach((movie, index) => {
    const moviePath = movie.backdrop_path
      ? `${IMAGE_URL}${movie.backdrop_path}`
      : noMovie;
    html += `
        <div class="popular-card card" key=${index}>
            <img src="${moviePath}" alt="Movie Poster of ${movie.title}" />

            <div class="texts popular">
              <h3>${movie.title}</h3>

              <div class="ratings">
                <img src="./assets/star.svg" alt="Star Icon" class="star" />
                <span class="rate">${movie.vote_average.toFixed(1)} •</span>
                <span class="lang">${movie.original_language} •</span>
                <span class="year">${movie.release_date}</span>
              </div>
            </div>
          </div>
    `;
    popularCards.innerHTML = html;
  });
}

/* GET TRENDING MOVIES */
const getTrendingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjQ5NWQ2OTcxZTZhZWE4OGNlNzRkYjFkMDdhYjk1MSIsIm5iZiI6MTc1MjgwMTY2Ni4xNjUsInN1YiI6IjY4NzlhMTgyMjIzMTAyYmMzZTU1YzAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kWh0N2NW4bT4xkSDOOqjb-ts4cz5CRqcPTO1WTDk2Ac",
    },
  };

  const response = await fetch(TRENDING_URL, options);
  const data = await response.json();
  renderTrendingMovies(data.results.splice(0, 6));
};

/* GET TRENDING MOVIES */
const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjQ5NWQ2OTcxZTZhZWE4OGNlNzRkYjFkMDdhYjk1MSIsIm5iZiI6MTc1MjgwMTY2Ni4xNjUsInN1YiI6IjY4NzlhMTgyMjIzMTAyYmMzZTU1YzAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kWh0N2NW4bT4xkSDOOqjb-ts4cz5CRqcPTO1WTDk2Ac",
    },
  };

  const response = await fetch(POPULAR_URL, options);
  const data = await response.json();
  renderPopularMovies(data.results);
};

getPopularMovies();
getTrendingMovies();
