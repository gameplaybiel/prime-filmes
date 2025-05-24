import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=2e2cc3a39bbe2f90304dfd5f2b5e1995

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;