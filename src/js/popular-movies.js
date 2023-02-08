import cardFilm from '../templates/card_film.hbs';
import SearchMovieApi from './themoviedb-api-class';
import { spinerOff, spinerOn } from './spiner';
import { addLocal } from './add-local';
import { createNewArr } from './search-movies';
import { createPopularPagination } from './pagination-popular';

// const searchFormPage = document.querySelector('#search-form');
const cardsContainer = document.getElementById('film-cards');
// console.log(cardsContainer);
// console.log(searchFormPage);

// function createPopularMarkup(results) {
//   cardsContainer.innerHTML = cardFilm(results);
// }

function createPopularMarkup(arr) {
  cardsContainer.innerHTML = cardFilm(createNewArr(arr));
}



async function onSearch(page) {
  try {
    spinerOn();
    const searchMovieApi = new SearchMovieApi();
    // console.log(searchMovieApi.getPopularFilms());
    searchMovieApi.page = page;
    const response = await searchMovieApi.getPopularFilms();
    setTimeout(spinerOff, 500);
    // console.log(response);
    createPopularMarkup(response.results);
    addLocal(response.results); //добавляє в локалстор
  } catch(error) {
    console.log(error.message);
  }
}

document.addEventListener('DOMContentLoaded', createPopularPagination());

export { onSearch, createPopularMarkup };
