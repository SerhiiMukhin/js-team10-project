import { toQueue } from './add-to-queue';
import { toWatched } from './add-to-watched';
import card from '../templates/card_library.hbs';
// import {addLocal, getLocalOne} from './add-local'
import { createLibraryPaginationWatched } from './pagination-library';
import { createLibraryPaginationQueue } from './pagination-library-queue';
import { spinerOff, spinerOn } from './spiner';
import { addLocal } from './add-local';

const list = document.querySelector('.library-section__card-set');
const btnWatch = document.querySelector('.js-watch');
const btnQueue = document.querySelector('.js-queue');
const current = 'is-current';

btnWatch.addEventListener('click', onWatch);
btnQueue.addEventListener('click', onQueue);

onQueue();
spinerOn();
onload = () => spinerOff();

function onQueue() {
  createLibraryPaginationQueue();
  addLocal(toQueue.getQueueAll());

  if (!btnQueue.classList.contains(current)) {
    btnQueue.classList.add(current);
    btnWatch.classList.remove(current);
    return;
  }
  btnQueue.classList.remove(current);
}

function onWatch() {
  createLibraryPaginationWatched();

  addLocal(toWatched.getWatchedAll());

  if (!btnWatch.classList.contains(current)) {
    btnWatch.classList.add(current);
    btnQueue.classList.remove(current);
    return;
  }
  btnWatch.classList.remove(current);
}
export function renderCard(arr) {
  try {
    if (arr.length > 0) {
      return (list.innerHTML = card(arr));
    } else {
      return (list.innerHTML =
        '<p>Sorry, you have no movies added to your library. Go to the home page.</p>');
    }
  } catch {
    return (list.innerHTML = '🐷');
  } finally {
    window.scrollBy(0, -window.innerHeight * 3);
  }
}
