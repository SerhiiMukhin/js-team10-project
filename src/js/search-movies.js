import SearchMovieApi from './themoviedb-api-class';
import filmCardTemplate from '../templates/card_film.hbs';
import { spinerOff, spinerOn } from './spiner';
import { addLocal } from './add-local';
import { getGenre } from './get-genres';
import { ScrollTop } from '../../node_modules/@georapbox/scroll-top-element/dist/scroll-top.js'; //для боковой кнопки скрола наверх (Никита)

const searchForm = document.querySelector('.js-search-form');
const cardBox = document.querySelector('.js-card-collection');
const searchMovieApi = new SearchMovieApi();
searchForm.addEventListener('submit', onSearch);
ScrollTop.defineCustomElement();

async function onSearch(evt) {
  evt.preventDefault();
  try {
    spinerOn();
    searchMovieApi.resetPage();
    searchMovieApi.quary = searchForm.query.value.trim();

    if (!searchMovieApi.quary) {
      console.log('Введите название фильма!');
      resetMarkup();
      return;
    }

    const { page, results, total_pages, total_results } =
      await searchMovieApi.getMovieByName();
    setTimeout(spinerOff, 500);

    if (total_results === 0) {
      resetMarkup();
      console.log('Введите нормальный запрос!');
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
// в createArrMarkup(arr) на базе results создаем новый массив newArr,
// в котором id жанров превращаются в строку жанров, а дату обрезаем,
// и прокидываем newArr в функцию hbs
function createNewArr(arr) {
  let newArr = [];
  arr.map(({ poster_path, title, release_date, genre_ids, id }) => {
    const filmGenres = getGenre(genre_ids).join(', ');
    const filmDate = release_date.slice(0, 4);
    const obj = { poster_path, title, filmDate, filmGenres, id };
    newArr.push(obj);
  });
  return newArr;
}

function createCardMarkup(arr) {
  const markup = filmCardTemplate(createNewArr(arr));
  cardBox.insertAdjacentHTML('beforeend', markup);
}

function resetMarkup() {
  cardBox.innerHTML = '';
}

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

export { createNewArr };
