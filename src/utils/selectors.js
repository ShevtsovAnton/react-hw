import { createSelector } from 'reselect';
import { getSortedMovies, getFilteredMovies, getSearchedMovies } from './helpers';

const sortMovies = createSelector(
  state => state.movies,
  state => state.sort,
  (movies, sort) => getSortedMovies(movies, sort)
);

export const getFilteredMoviesIds = createSelector(
  sortMovies,
  state => state.app.filterBy,
  (sortedMovies, filterBy) => getFilteredMovies(sortedMovies, filterBy).map(movie => movie.id)
);

export const getSearchedMoviesIds = createSelector(
  sortMovies,
  state => state.searchQuery,
  (sortedMovies, searchQuery) => getSearchedMovies(sortedMovies, searchQuery).map(movie => movie.id)
);

export const getMovie = createSelector(
  state => state.movies,
  state => state.detailedMovieId,
  (movies, detailedMovieId) => movies.filter(movieItem => movieItem.id === detailedMovieId)[0]
);
