//Щоб підключити
// import toQueue from './js/add-to-watched'

// Приклад виклику метода '''toQueue.setQueueOne(obj)''' для дій з фільмами моєї бібліотеки в розділі черга.

//для запису одного фільма викликаємо setQueueOne(фільм) він приймає обєкт (цілий обєкт одного фільма) і записує в масив в локальне сховище(LS),
//якщо фільм добавило повертає true якщо виникла помилка поверне false.

//для того щоб отримати один збережений фільм викликаємо toQueue.getQueueOne(ід) приймає ід фільма, шукає в LS  по id фільм, повертає масив з одним обєктом,
//якщо фільм не знайшло повертає пустий масив, якщо не знайшло записів про Json в LS  поверне undefined, якщо виникла помилка з LS повертає false.

//для того щоб повернути всі збережені фільми toQueue.getQueueAll(фільм) повертає масив обєктів
//якщо фільми не знайшло повертає пустий масив, якщо не знайшло записів про Json в LS  поверне undefined, якщо виникла помилка з LS повертає false.

//для видалення фільму з черги removeQueueOneEl(ід) передаємо ід фільма , перезаписує масив в LS без переданого вільму і повертає true якщо все успішно ,
//якщо не знайшло записів про Json в LS  поверне undefined, якщо виникла помилка з LS повертає false.

const QUEUE = 'to-queue';

export const toQueue = {
  addMovie(movie, arr) {
    if (arr.every(e => e.id !== movie.id)) {
      arr.unshift(movie);
    }
    return arr;
  },

  removeMovie(id, arr) {
    return arr.filter(e => e.id !== id);
  },

  getQueueAll() {
    try {
      if (localStorage.getItem(QUEUE)) {
        return JSON.parse(localStorage.getItem(QUEUE));
      }
      return undefined;
    } catch {
      return false;
    }
  },

  getQueueOne(id) {
    try {
      if (localStorage.getItem(QUEUE)) {
        const arr = JSON.parse(localStorage.getItem(QUEUE));

        return arr.filter(e => e.id === id);
      }
      return undefined;
    } catch {
      return false;
    }
  },

  setQueueOne(el) {
    try {
      if (localStorage.getItem(QUEUE)) {
        const arr = JSON.parse(localStorage.getItem(QUEUE));

        localStorage.setItem(QUEUE, JSON.stringify(this.addMovie(el, arr)));
        return true;
      }

      const arrMovie = [];

      arrMovie.push(el);
      localStorage.setItem(QUEUE, JSON.stringify(arrMovie));

      return true;
    } catch {
      return false;
    }
  },

  removeQueueOneEl(id) {
    try {
      if (localStorage.getItem(QUEUE)) {
        const arr = JSON.parse(localStorage.getItem(QUEUE));

        localStorage.setItem(QUEUE, JSON.stringify(this.removeMovie(id, arr)));
        return true;
      }
      return undefined;
    } catch {
      return false;
    }
  },
};
