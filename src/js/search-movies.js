import SearchMovieApi from './themoviedb-api-class';
import filmCardTemplate from '../templates/card_film.hbs';
import { spinerOff, spinerOn } from './spiner';
import { addLocal } from './add-local';
import { getGenre } from './get-genres';
import { ScrollTop } from '../../node_modules/@georapbox/scroll-top-element/dist/scroll-top.js';
import { createSearchPagination } from './pagination-search';

const searchForm = document.querySelector('.js-search-form');
const cardBox = document.querySelector('.js-card-collection');
const erorrNotify = document.querySelector('.js-error-notify');
const searchMovieApi = new SearchMovieApi();

searchForm.addEventListener('submit', createSearchPagination);
ScrollTop.defineCustomElement();
erorrNotify.innerHTML = '';

async function onSearchByName(pages) {
  try {
    spinerOn();
    searchMovieApi.resetPage();
    searchMovieApi.quary = searchForm.query.value.trim();

    if (!searchMovieApi.quary) {
      erorrNotify.innerHTML = 'Search result not successful.';
      setTimeout(resetErorrMarkup, 3000);
      spinerOff();
      return;
    }
    searchMovieApi.page = pages;
    const { page, results, total_pages, total_results } =
      await searchMovieApi.getMovieByName();

    setTimeout(spinerOff, 500);

    if (total_results === 0) {
      erorrNotify.innerHTML = 'Enter the correct movie name and try again.';
      setTimeout(resetErorrMarkup, 3000);
      return;
    }
    addLocal(results);
    resetMarkup();
    createCardMarkup(results);
  } catch (error) {
    spinerOff();
    console.log(error.message);
  }
}

function createNewArr(arr) {
  const newArr = arr.map(el => {
    el.genre_ids = getGenre(el.genre_ids).join(', ');
    el.release_date = el.release_date.slice(0, 4);
    return el;
  });
  addLocal(newArr);
  return newArr;
}

function createCardMarkup(arr) {
  const markup = filmCardTemplate(createNewArr(arr));
  cardBox.insertAdjacentHTML('beforeend', markup);
}

function resetMarkup() {
  cardBox.innerHTML = '';
}

function resetErorrMarkup() {
  erorrNotify.innerHTML = '';
}

export { createNewArr, onSearchByName };

// async function getGenresTest() {
//   try {
//     let obj = { genr: 1 };
//     let doubleObj = {};
//     const genres = await searchMovieApi.getMovieGenres();
//     console.log(genres);
//     genres.genres.map(({ id, name }) => {
//       doubleObj = Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [(key = name), (value = id)])
//       );
//     });
//     console.log(doubleObj);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// в createArrMarkup(arr) на базе results создаем новый массив newArr,
// в котором id жанров превращаются в строку жанров, а дату обрезаем,
// и прокидываем newArr в функцию hbs
// function createNewArr(arr) {
//   let newArr = [];
//   arr.map(
//     ({
//       poster_path,
//       title,
//       release_date,
//       genre_ids,
//       id,
//       vote_average,
//       vote_count,
//       popularity,
//       original_title,
//       overview,
//     }) => {
//       const filmGenres = getGenre(genre_ids).join(', ');
//       const filmDate = release_date.slice(0, 4);
//       const obj = {
//         poster_path,
//         title,
//         filmDate,
//         filmGenres,
//         id,
//         vote_average,
//         vote_count,
//         popularity,
//         original_title,
//         overview,
//       };
//       newArr.push(obj);
//     }
//   );
//   addLocal(newArr);
//   return newArr;
// }

// import SearchMovieApi from './themoviedb-api-class';
// import filmCardTemplate from '../templates/card_film.hbs';
// import { spinerOff, spinerOn } from './spiner';
// import { addLocal } from './add-local';
// import { getGenre } from './get-genres';
// import { ScrollTop } from '../../node_modules/@georapbox/scroll-top-element/dist/scroll-top.js';
// import { createSearchPagination } from './pagination-search';

// const searchForm = document.querySelector('.js-search-form');
// const cardBox = document.querySelector('.js-card-collection');
// const erorrNotify = document.querySelector('.js-error-notify');
// const searchMovieApi = new SearchMovieApi();

// searchForm.addEventListener('submit', createSearchPagination);
// ScrollTop.defineCustomElement();
// erorrNotify.innerHTML = '';

// async function onSearchByName(pages) {
//   try {
//     spinerOn();
//     searchMovieApi.resetPage();
//     searchMovieApi.quary = searchForm.query.value.trim();

//     if (!searchMovieApi.quary) {
//       erorrNotify.innerHTML = 'Search result not successful.';
//       setTimeout(resetErorrMarkup, 3000);
//       spinerOff();
//       return;
//     }
//     searchMovieApi.page = pages;
//     const { page, results, total_pages, total_results } =
//       await searchMovieApi.getMovieByName();

//     setTimeout(spinerOff, 500);

//     if (total_results === 0) {
//       erorrNotify.innerHTML = 'Enter the correct movie name and try again.';
//       setTimeout(resetErorrMarkup, 3000);
//       return;
//     }
//     // console.log(results);
//     // addLocal(results);
//     resetMarkup();
//     createCardMarkup(results);
//   } catch (error) {
//     spinerOff();
//     console.log(error.message);
//   }
// }

// function createNewArr(arr) {
//   const newArr = arr.map(el => {
//     el.genre_ids = getGenre(el.genre_ids).join(', ');
//     el.release_date = el.release_date.slice(0, 4);
//     return el;
//   });
//   addLocal(newArr);
//   return newArr;
// }

// function createCardMarkup(arr) {
//   const markup = filmCardTemplate(createNewArr(arr));
//   cardBox.insertAdjacentHTML('beforeend', markup);
// }

// function resetMarkup() {
//   cardBox.innerHTML = '';
// }

// function resetErorrMarkup() {
//   erorrNotify.innerHTML = '';
// }

// export { createNewArr, onSearchByName };
