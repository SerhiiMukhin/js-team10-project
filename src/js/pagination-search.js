import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { onSearchByName, createNewArr } from './search-movies';



export function createSearchPagination(evt) {
  evt.preventDefault();

  
  const container = document.querySelector('#pagination');
  const itemsPerPage = 20;
  const options = {
    totalItems: 2000,
    itemsPerPage,
    visiblePages: 5,
    centerAlign: false,
  };

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', event => {
      onSearchByName(event.page);
  });

  pagination.movePageTo(0);

};




