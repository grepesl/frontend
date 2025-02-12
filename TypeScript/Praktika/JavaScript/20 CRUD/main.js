import Movie from "./modules/Movie.js";

const displayMoviesDiv = document.querySelector('#displayMovies');
const displayMoviesFromData = async () => {
  try {
    const res = await fetch(`http://localhost:3000/movies`);
    const movies = await res.json();
    movies.forEach(movie => {
      new Movie(movie, displayMoviesDiv);
    });
  } catch(err) {
    console.error(`Error:`, err);
  }
}
displayMoviesFromData();

document
  .querySelector('#addMovie')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const movie = {};
    formData.forEach((value, key) => movie[key] = value);
    // console.log(movie);
    movie.genres = movie.genres.split(', ');
    movie.length = Number(movie.length);
    // movie.id = Math.ceil(Math.random()*999999).toString();
    // console.log(movie);
    
    const res = await fetch(`http://localhost:3000/movies`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(movie)
    });
    const movieResponse = await res.json();
    new Movie(movieResponse, displayMoviesDiv); // atvaizduoju ekrane
  });