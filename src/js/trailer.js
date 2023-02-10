import axios from 'axios';
import trailerHBS from '../templates/trailer.hbs';
import { spinerOff, spinerOn } from './spiner';
import SearchMovieApi from "./themoviedb-api-class"

const newSearchMovieApi = new SearchMovieApi();

const btnTrailer = document.querySelector('.btn-trailer');
const trailer = document.querySelector('.trailer');

btnTrailer.addEventListener('click', trailerOn);

async function trailerOn(e) {
  spinerOn();

  let id = +document.querySelector('.modal_img').dataset.id;
  let key;

  const res = await newSearchMovieApi.getTrailerId(id);

  const arr = res.filter(e => e.name === 'Official Trailer');

  if (arr.length > 0) {
    key = arr[0].key;
  } else {
    key = res[0].key;
  }

  trailer.innerHTML = trailerHBS(key);
  modalCloseHandler();
}

function modalCloseHandler() {
  trailer.addEventListener('click', closeModalBackdrop);
  document.addEventListener('keydown', onCloseModalEsc);
  trailer.classList.remove('js-hidden');
  spinerOff();
}

function closeModalBackdrop(event) {
  if (event.target.classList.contains('trailer')) {
    trailer.classList.add('js-hidden');
  }
  removeEventListener();
}

function onCloseModalEsc(event) {
  if (event.key !== 'Escape') {
    return;
  } else {
    trailer.classList.add('js-hidden');
  }
  removeEventListener();
}

function removeEventListener() {
  if (trailer.classList.contains('js-hidden')) {
    trailer.removeEventListener('click', closeModalBackdrop);
    document.removeEventListener('keydown', onCloseModalEsc);
    trailer.innerHTML = '';
  } else {
    return;
  }
}
