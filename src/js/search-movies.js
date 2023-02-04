import SearchMovieApi from './themoviedb-api-class'; // импортируем класс
import filmCardTemplate from '../templates/card_film.hbs';

const searchForm = document.querySelector('#search-form');
const cardBox = document.querySelector('.js-card-collection');
const searchMovieApi = new SearchMovieApi(); // создаем экземпляр класса
searchForm.addEventListener('submit', onSearch);
getGenres();

async function onSearch(evt) {
  evt.preventDefault();
  try {
    searchMovieApi.resetPage();
    searchMovieApi.quary = searchForm.searchQuery.value.trim(); // для поиска инфо по id также записываем значение id в searchMovieApi.movieId

    if (!searchMovieApi.quary) {
      console.log('Введите название фильма!');
      resetMarkup();
      return;
    }

    const { page, results, total_pages, total_results } =
      await searchMovieApi.getMovieByName(); // здесь меняем на свой метод класса getPopularFilms()/getInfoByMovieId() и деструктуризируем необходимые данные из респонса

    if (total_results === 0) {
      resetMarkup();
      console.log('Введите нормальный запрос!');
      return;
    }

    resetMarkup();
    createCardMarkup(results);
  } catch (error) {
    console.log(error.message);
  }
}

function createCardMarkup(arr) {
  let newArr = [];
  arr.map(({ poster_path, title, release_date, genre_ids }) => {
    const filmDate = release_date.slice(0, 4);
    const obj = { poster_path, title, filmDate, genre_ids };
    newArr.push(obj);
  });
  const markup = newArr.map(ar => filmCardTemplate(ar)).join('');
  cardBox.insertAdjacentHTML('beforeend', markup);
}

function resetMarkup() {
  cardBox.innerHTML = '';
}

async function getGenres() {
  try {
    const genres = await searchMovieApi.getMovieGenres();
    console.log(genres);
    let genId;
    let genresObj = { genId: '1' };
    genres.genres.map(({ id, name }) => {
      genId = id;
      genresObj.genId = name;
    });
    console.log(genresObj[0]);
  } catch (error) {
    console.log(error.message);
  }
}
