import axios from 'axios';
import trailerHBS from '../templates/trailer.hbs';
import { spinerOff, spinerOn } from './spiner';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a59dfea75e9e40e203f0819879862061';

const btnTrailer = document.querySelector('.btn-trailer');
const trailer = document.querySelector('.trailer');

btnTrailer.addEventListener('click', trailerOn);

async function getTrailerId(id) {
  const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
}

async function trailerOn(e) {
  spinerOn();

  let id = +document.querySelector('.modal_img').dataset.id;
  let key;

  const res = await getTrailerId(id);

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
