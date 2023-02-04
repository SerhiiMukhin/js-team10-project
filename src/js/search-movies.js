import SearchMovieApi from './themoviedb-api-class'; // импортируем класс
import filmCardTemplate from '../templates/card_film.hbs';

searchForm = document.querySelector('#search-form');
cardBox = document.querySelector('.js-card-collection');
const searchMovieApi = new SearchMovieApi(); // создаем экземпляр класса
searchForm.addEventListener('submit', onSearch);

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
  const markup = filmCardTemplate(arr);
  cardBox.insertAdjacentHTML('beforeend', markup);
}

function resetMarkup() {
  cardBox.innerHTML = '';
}