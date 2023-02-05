// import * as basicLightbox from 'basiclightbox';
import SearchMovieApi from './themoviedb-api-class';
import { refs } from './get-refs';
// import templatesModalCard from '../templates/';
// import toWatched from './js/add-to-watched';
// import toQueue from './js/add-to-queue';
// import { spinerOn, spinerOff } from './spiner';

const moviesApiService = new SearchMovieApi();

refs.movies.addEventListener('click', onMovieClick);

// Открыти модалки с фильмом
function onMovieClick(event) {}

// Обработка слушателей модального окна
function modalCloseHandler() {
  refs.body.classList.add('disable-scroll');
  refs.modalClose.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onCloseModalBackdrop);
  document.addEventListener('keydown', onCloseModalEsc);
  refs.backdrop.classList.remove('is-hidden');
}

// Закрытие модалки по нажатию кнопки close
function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');

  removeEventListener();
}

// Закрытие модалки по backdrop
function onCloseModalBackdrop(event) {
  if (event.target === refs.backdrop) {
    refs.backdrop.classList.add('is-hidden');
  }
  removeEventListener();
}

// Закрытие модалки по Esc
function onCloseModalEsc(event) {
  if (event.key !== 'Escape') {
    return;
  } else {
    refs.backdrop.classList.add('is-hidden');
  }
  removeEventListener();
}

// Снятие слушателей
function removeEventListener() {
  if (refs.backdrop.classList.contains('is-hidden')) {
    refs.modalClose.removeEventListener('click', onCloseModal);
    refs.backdrop.removeEventListener('click', onCloseModalBackdrop);
    document.removeEventListener('keydown', onCloseModalEsc);
    refs.body.classList.remove('disable-scroll');
  } else {
    return;
  }
}