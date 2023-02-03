import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'a59dfea75e9e40e203f0819879862061';

export default class SearchMovieApi {
  constructor() {
    this.searchQuary = '';
    this.page = 1;
    this.movieId = 3;
    // this.url = {
    //   popular: `${BASE_URL}trending/movie/day?api_key=${KEY}`,
    //   search: `${BASE_URL}search/movie?api_key=${KEY}&query=${this.searchQuary}&page=${this.page}&language=en-US&page=1&include_adult=false`,
    //   info: `${BASE_URL}movie/${this.movieId}?api_key=${KEY}&language=en-US`,
    // };
  }

  async themoviedbApi() {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&query=${this.searchQuary}&page=${this.page}&language=en-US&page=1&include_adult=false`
    );
    return response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get quary() {
    return this.searchQuary;
  }

  set quary(newQuary) {
    this.searchQuary = newQuary;
  }
}
