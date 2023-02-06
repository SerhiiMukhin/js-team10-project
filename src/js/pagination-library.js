import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { toWatched } from './add-to-watched';
import { renderCard } from './lib';

const watchedData = toWatched.getWatchedAll();

export function getPageFilms(watchedData, itemsPerPage, currentPage) {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;

  return toWatched.getWatchedAll().slice(start, end);
}

export function createLibraryPaginationWatched(items, renderFn, totalItems) {
  const container = document.querySelector('#pagination');
  const cardSetLibrary = document.querySelector('.library-section__card-set');
  if (!watchedData) {
    return (cardSetLibrary.innerHTML = '🐷');
  }
  const itemsPerPage = 10;
  const options = {
    totalItems: totalItems || watchedData.length,
    itemsPerPage,
    visiblePages: 5,
    centerAlign: false,
  };

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', event => {
    renderCard(getPageFilms(items, itemsPerPage, event.page - 1));
  });

  pagination.movePageTo(0);
}