import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { onSearch } from './popular-movies.js';
import SearchMovieApi from './themoviedb-api-class';

const searchMovieApi = new SearchMovieApi();

export async function createPopularPagination() {
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
    onSearch(event.page);
  });

  pagination.movePageTo(0);

};
