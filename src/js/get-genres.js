import SearchMovieApi from './themoviedb-api-class';
const searchMovieApi = new SearchMovieApi();
const KEY = 'data-genresArr';

// получаем жанры и пишем в local storage при загрузке страницы
async function getGenres() {
  try {
    const { genres } = await searchMovieApi.getMovieGenres();
    addGenresToLocal(genres);
  } catch (error) {
    console.log(error.message);
  }
}

// перебираем массив объектов жанров из local storage сравнивает id с id, которые приходят в карточке фильма,
// если совпадают, то передает название жанра в новый массив, и возвращает этот массив
function getGenre(arr) {
  let genrNames = [];
  const movieGenres = getGenresFromLocal();
  movieGenres.map(({ id, name }) => {
    arr.map(ar => {
      if (ar === id) {
        genrNames.push(name);
      }
    });
  });
  return genrNames;
}

function addGenresToLocal(arr) {
  try {
    localStorage.setItem(KEY, JSON.stringify(arr));
    return true;
  } catch {
    return false;
  }
}

function getGenresFromLocal() {
  try {
    if (localStorage.getItem(KEY)) {
      const arr = JSON.parse(localStorage.getItem(KEY));
      return arr;
    }
    return undefined;
  } catch {
    return false;
  }
}

export { getGenre, getGenres };
