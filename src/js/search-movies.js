import { ScrollTop } from '../../node_modules/@georapbox/scroll-top-element/dist/scroll-top.js';
ScrollTop.defineCustomElement(); //для боковой кнопки скрола наверх (Никита)

import SearchMovieApi from './themoviedb-api-class';
import filmCardTemplate from '../templates/card_film.hbs';
import {addLocal} from './add-local'

const searchForm = document.querySelector('.js-search-form');
const cardBox = document.querySelector('.js-card-collection');
const searchMovieApi = new SearchMovieApi();
searchForm.addEventListener('submit', onSearch);
let movieGenres = [];
getGenres(); // получаем жанры (нужно переделать чтобы хранились в local storage)

async function onSearch(evt) {
  evt.preventDefault();
  try {
    searchMovieApi.resetPage();
    searchMovieApi.quary = searchForm.query.value.trim();

    if (!searchMovieApi.quary) {
      console.log('Введите название фильма!');
      resetMarkup();
      return;
    }

    const { page, results, total_pages, total_results, } =
      await searchMovieApi.getMovieByName();

    if (total_results === 0) {
      resetMarkup();
      console.log('Введите нормальный запрос!');
      return;
    }

    addLocal(results);
    resetMarkup();
    createCardMarkup(results);
  } catch (error) {
    console.log(error.message);
  }
}
// в createCardMarkup(arr) на базе results создаем новый массив newArr,
// в котором id жанров превращаются в строку жанров, а дату обрезаем,
// и прокидываем newArr в функцию hbs
function createCardMarkup(arr) {
  let newArr = [];
  arr.map(({ poster_path, title, release_date, genre_ids, id }) => {
    const filmGenres = getGenre(genre_ids).join(', ');
    const filmDate = release_date.slice(0, 4);
    const obj = { poster_path, title, filmDate, filmGenres, id };
    newArr.push(obj);
  });

  const markup = filmCardTemplate(newArr);
  cardBox.insertAdjacentHTML('beforeend', markup);
}

// getGenres() получает массив обьектов жанров с бекенда и записывает в movieGenres
async function getGenres() {
  try {
    const { genres } = await searchMovieApi.getMovieGenres();
    movieGenres = genres;
  } catch (error) {
    console.log(error.message);
  }
}

// getGenre(arr) перебирает массив объектов жанров и сравнивает id с id,
// которые приходят в карточке фильма,
// если совпадают, то передает название жанра в новый массив,
// и возвращает этот массив
function getGenre(arr) {
  let genrNames = [];
  movieGenres.map(({ id, name }) => {
    arr.map(ar => {
      if (ar === id) {
        genrNames.push(name);
      }
    });
  });
  return genrNames;
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

function resetMarkup() {
  cardBox.innerHTML = '';
}
