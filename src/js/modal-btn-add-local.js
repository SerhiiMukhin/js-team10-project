import { getLocalOne } from './add-local';
import { toWatched } from './add-to-watched';
import { toQueue } from './add-to-queue';

const backdrop = document.querySelector('.backdrop');

const watchBtn = 'js-watched-modal';
const queueBth = 'js-queue-modal';
const reviewed = 'reviewed';
const yourTurn = 'in your turn';

backdrop.addEventListener('click', onClick);

function onClick(e) {
  const id = +e.target.dataset.id;

  const btn = {
    btn_watched: document.querySelector('.btn_watched'),
    btn_queue: document.querySelector('.btn_queue'),
  };

  if (e.target.classList.contains('btn_watched')) {
    if (
      !toWatched.getWatchedOne(id) ||
      toWatched.getWatchedOne(id).length < 1
    ) {
      toWatched.setWatchedOne(...getLocalOne(id));
      toWatchAddCurrent(btn.btn_watched);

      try {
        if (
          toQueue.getQueueAll() !== undefined &&
          toQueue.getQueueOne(id).length > 0
        ) {
          toQueue.removeQueueOneEl(id);
          removeQueueCurent(btn.btn_queue);
        }
      } finally {
        return;
      }
    } else {
      toWatched.removeWatchedOneEl(id);
      removeWatchCurrent(btn.btn_watched);
    }
  }

  if (e.target.classList.contains('btn_queue')) {
    if (!toQueue.getQueueOne(id) || toQueue.getQueueOne(id).length < 1) {
      toQueue.setQueueOne(...getLocalOne(id));
      toQueueAddCurent(btn.btn_queue);

      try {
        if (
          toWatched.getWatchedAll !== undefined &&
          toWatched.getWatchedOne(id).length > 0
        ) {
          toWatched.removeWatchedOneEl(id);
          removeWatchCurrent(btn.btn_watched);
        }
      } finally {
        return;
      }
    } else {
      toQueue.removeQueueOneEl(id);
      removeQueueCurent(btn.btn_queue);
    }
  }
}

export function watchedCurrent(id) {
  const btn = {
    btn_watched: document.querySelector('.btn_watched'),
    btn_queue: document.querySelector('.btn_queue'),
  };
  if (toWatched.getWatchedOne(id)) {
    if (toWatched.getWatchedOne(id).length > 0) {
      toWatchAddCurrent(btn.btn_watched);
    }
  }

  if (toQueue.getQueueOne(id)) {
    if (toQueue.getQueueOne(id).length > 0) {
      toQueueAddCurent(btn.btn_queue);
    }
  }
}

function toWatchAddCurrent(btn) {
  btn.classList.add(watchBtn);
  btn.textContent = reviewed;
}

function toQueueAddCurent(btn) {
  btn.classList.add(queueBth);
  btn.textContent = yourTurn;
}

function removeWatchCurrent(btn) {
  btn.classList.remove(watchBtn);
  btn.textContent = 'add to watched';
}

function removeQueueCurent(btn) {
  btn.classList.remove(queueBth);
  btn.textContent = 'add to queue';
}
