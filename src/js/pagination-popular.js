import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { onSearch } from './popular-movies.js';


export function createPopularPagination() {

  const container = document.querySelector('#pagination');
  const itemsPerPage = 20;
  const options = {
    totalItems: 20000,
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
