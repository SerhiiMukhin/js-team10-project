import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { onSearchByName, createNewArr } from './search-movies';
import SearchMovieApi from './themoviedb-api-class';

const searchMovieApi = new SearchMovieApi();

function getPageFilms(ids, itemsPerPage, currentPage) {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  return ids.slice(start, end);
}

export async function createSearchPagination(evt) {
  evt.preventDefault();

  const response = await searchMovieApi.getPopularFilms();
  const container = document.querySelector('#pagination');
  const itemsPerPage = 20;
  const options = {
    totalItems: response.total_results,
    itemsPerPage,
    visiblePages: 5,
    centerAlign: false,
  };

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', event => {
    response.page = event.page;
      onSearchByName(response.page);
  });

  pagination.movePageTo(0);

};
