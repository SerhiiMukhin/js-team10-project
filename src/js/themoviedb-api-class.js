import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a59dfea75e9e40e203f0819879862061';

export default class SearchMovieApi {
  constructor() {
    this.searchQuary = '';
    this.page = 1;
    this.movieId = '';
    this.lang = 'en-US';
  }

  async getMovieByName() {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.searchQuary}&page=${this.page}&language=${this.lang}&include_adult=false`;
    const response = await axios.get(url);
    return response.data;
  }

  async getPopularFilms() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${this.lang}&page=${this.page}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getInfoByMovieId() {
    const url = `${BASE_URL}movie/${this.movieId}?api_key=${API_KEY}&language=${this.lang}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getMovieGenres() {
    const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getTrailerId(id) {
    const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  }
  
  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
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
