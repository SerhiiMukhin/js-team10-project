import cardFilm from '../templates/card_film.hbs';
import SearchMovieApi from './themoviedb-api-class';
import { spinerOff, spinerOn } from './spiner';
import { createNewArr } from './search-movies';

const cardsContainer = document.getElementById('film-cards');

function createPopularMarkup(arr) {
  cardsContainer.innerHTML = cardFilm(createNewArr(arr));
}

async function onSearch(page) {
  try {
    spinerOn();
    const searchMovieApi = new SearchMovieApi();
    searchMovieApi.page = page;
    const response = await searchMovieApi.getPopularFilms();
    setTimeout(spinerOff, 500);
    createPopularMarkup(response.results);
  } catch (error) {
    console.log(error.message);
  }
}

export { onSearch, createPopularMarkup };
