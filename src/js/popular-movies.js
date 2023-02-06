import cardFilm from '../templates/card_film.hbs';
import SearchMovieApi from './themoviedb-api-class';

// const searchFormPage = document.querySelector('#search-form');
const cardsContainer = document.getElementById('film-cards');
// console.log(cardsContainer);
// console.log(searchFormPage);

function createPopularMarkup(results) {
  cardsContainer.innerHTML = cardFilm(results);
}

async function onSearch() {
  const searchMovieApi = new SearchMovieApi();
  // console.log(searchMovieApi.getPopularFilms());
  const response = await searchMovieApi.getPopularFilms();
  // console.log(response);
  createPopularMarkup(response.results);
}

document.addEventListener('DOMContentLoaded', onSearch);
