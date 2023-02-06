import cardFilm from '../templates/card_film.hbs';
import SearchMovieApi from './themoviedb-api-class';
import { spinerOff, spinerOn } from './spiner';

// const searchFormPage = document.querySelector('#search-form');
const cardsContainer = document.getElementById('film-cards');
// console.log(cardsContainer);
// console.log(searchFormPage);

function createPopularMarkup(results) {
  cardsContainer.innerHTML = cardFilm(results);
}

async function onSearch() {
  try {
    spinerOn();
    const searchMovieApi = new SearchMovieApi();
    // console.log(searchMovieApi.getPopularFilms());
    const response = await searchMovieApi.getPopularFilms();
    setTimeout(spinerOff, 500);
    // console.log(response);
    createPopularMarkup(response.results);
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener('DOMContentLoaded', onSearch);
