//Щоб підключити
// import toWatched from './js/add-to-watched'

// Приклад виклику метода '''toWatched.setQueueOne(obj)''' для дій з фільмами моєї бібліотеки в розділі переглянуті.

//для запису одного фільма викликаємо setWatchedOne(фільм) він приймає обєкт (цілий обєкт одного фільма) і записує в масив в локальне сховище(LS),
//якщо фільм добавило повертає true якщо виникла помилка поверне false.

//для того щоб отримати один збережений фільм викликаємо toQueue.getWatchedOne(ід) приймає ід фільма, шукає в LS  по id фільм, повертає масив з одним обєктом,
//якщо фільм не знайшло повертає пустий масив, якщо не знайшло записів про Json в LS  поверне undefined, якщо виникла помилка з LS повертає false.

//для того щоб повернути всі збережені фільми toQueue.getWatchedAll(фільм) повертає масив обєктів
//якщо фільми не знайшло повертає пустий масив, якщо не знайшло записів про Json в LS  поверне undefined, якщо виникла помилка з LS повертає false.

//для видалення фільму з переглянутих removeWatchedOneEl(ід) передаємо ід фільма , перезаписує масив в LS без переданого вільму і повертає true якщо все успішно ,
//якщо не знайшло записів про Json в LS  поверне undefined, якщо виникла помилка з LS повертає false.

const WATCHED = 'to-watched';

export const toWatched = {
  addMovie(movie, arr) {
    if (arr.every(e => e.id !== movie.id)) {
      arr.unshift(movie);
    }
    return arr;
  },

  removeMovie(id, arr) {
    return arr.filter(e => e.id !== id);
  },

  getWatchedAll() {
    if (localStorage.getItem(WATCHED)) {
      return JSON.parse(localStorage.getItem(WATCHED));
    }
    return undefined;
  },

  getWatchedOne(id) {
    if (localStorage.getItem(WATCHED)) {
      const arr = JSON.parse(localStorage.getItem(WATCHED));

      return arr.filter(e => e.id === id);
    }
    return undefined;
  },

  setWatchedOne(el) {
    try {
      if (localStorage.getItem(WATCHED)) {
        const arr = JSON.parse(localStorage.getItem(WATCHED));

        localStorage.setItem(WATCHED, JSON.stringify(this.addMovie(el, arr)));
        return true;
      }

      const arrMovie = [];

      arrMovie.push(el);
      localStorage.setItem(WATCHED, JSON.stringify(arrMovie));

      return true;
    } catch {
      return false;
    }
  },

  removeWatchedOneEl(id) {
    try {
      if (localStorage.getItem(WATCHED)) {
        const arr = JSON.parse(localStorage.getItem(WATCHED));

        localStorage.setItem(
          WATCHED,
          JSON.stringify(this.removeMovie(id, arr))
        );
        return true;
      }
      return undefined;
    } catch {
      return false;
    }
  },
};
