import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { onSearchByName, createNewArr } from './search-movies';
import SearchMovieApi from './themoviedb-api-class';
import { spinerOff, spinerOn } from './spiner';

const searchMovieApi = new SearchMovieApi();
const searchForm = document.querySelector('.js-search-form');
const erorrNotify = document.querySelector('.js-error-notify');

export async function createSearchPagination(evt) {
  evt.preventDefault();

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

    const { page, results, total_pages, total_results } =
      await searchMovieApi.getMovieByName();

    setTimeout(spinerOff, 500);

    if (total_results === 0) {
      erorrNotify.innerHTML = 'Enter the correct movie name and try again.';
      setTimeout(resetErorrMarkup, 3000);
      return;
    }

    const container = document.querySelector('#pagination');
    const itemsPerPage = 20;
    const options = {
      totalItems: total_results,
      itemsPerPage,
      visiblePages: 5,
      centerAlign: true,
    };

    const pagination = new Pagination(container, options);

    pagination.on('beforeMove', event => {
      onSearchByName(event.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    pagination.movePageTo(0);
  } catch (error) {
    spinerOff();
    console.log(error.message);
  }
}

// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
// import { onSearchByName, createNewArr } from './search-movies';

// export function createSearchPagination(evt) {
//   evt.preventDefault();

//   const container = document.querySelector('#pagination');
//   const itemsPerPage = 20;
//   const options = {
//     totalItems: 2000,
//     itemsPerPage,
//     visiblePages: 5,
//     centerAlign: false,
//   };

//   const pagination = new Pagination(container, options);

//   pagination.on('beforeMove', event => {
//       onSearchByName(event.page);
//   });

//   pagination.movePageTo(0);

// };
