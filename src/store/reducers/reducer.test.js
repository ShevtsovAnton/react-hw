import { rootReducer as reducer, initialState } from './index';
import types from '../actionTypes';
import movies from '../../__mocks__/movies';

const editedMovie = {
  id: 612706,
  video: false,
  vote_count: 334,
  vote_average: 8.0,
  title: 'NEW TITLE',
  release_date: '2020-08-07'
};

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_MOVIES_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: types.GET_MOVIES_REQUEST
      })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle GET_MOVIES_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.GET_MOVIES_SUCCESS,
        movies
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      movies: [...movies]
    });
  });

  it('should handle GET_MOVIES_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.GET_MOVIES_ERROR
      })
    ).toEqual({
      ...initialState,
      isLoading: false
    });
  });

  it('should handle GET_MOVIES_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.SORT_BY,
        payload: 'title'
      })
    ).toEqual({
      ...initialState,
      sortBy: 'title'
    });
  });

  it('should handle FILTER_BY', () => {
    expect(
      reducer(initialState, {
        type: types.FILTER_BY,
        payload: 'comedy'
      })
    ).toEqual({
      ...initialState,
      filterBy: 'comedy',
      searchQuery: ''
    });
  });

  it('should handle SEARCH_BY', () => {
    expect(
      reducer(initialState, {
        type: types.SEARCH_BY,
        payload: 'query'
      })
    ).toEqual({
      ...initialState,
      searchQuery: 'query'
    });
  });

  it('should handle SEARCH_BY', () => {
    expect(
      reducer(initialState, {
        type: types.SEARCH_BY,
        payload: 'query'
      })
    ).toEqual({
      ...initialState,
      searchQuery: 'query'
    });
  });

  it('should handle ADD_MOVIE_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.ADD_MOVIE_SUCCESS,
        payload: editedMovie
      })
    ).toEqual({
      ...initialState,
      movies: [...initialState.movies, editedMovie]
    });
  });

  it('should handle EDIT_MOVIE_SUCCESS', () => {
    const state = {
      ...initialState,
      movies
    };
    const foundIndex = state.movies.findIndex(movie => movie.id === editedMovie.id);
    expect(
      reducer(state, {
        type: types.EDIT_MOVIE_SUCCESS,
        payload: editedMovie
      })
    ).toEqual({
      ...state,
      movies: [
        ...state.movies.slice(0, foundIndex, 1),
        editedMovie,
        ...state.movies.slice(foundIndex + 1)
      ]
    });
  });

  it('should handle DELETE_MOVIE_SUCCESS', () => {
    const state = {
      ...initialState,
      movies
    };
    expect(
      reducer(state, {
        type: types.DELETE_MOVIE_SUCCESS,
        payload: editedMovie.id
      })
    ).toEqual({
      ...state,
      movies: [...state.movies.filter(movie => movie.id !== editedMovie.id)]
    });
  });

  it('should handle SHOW_MOVIE_DETAILS:', () => {
    expect(
      reducer(initialState, {
        type: types.SHOW_MOVIE_DETAILS,
        payload: '2'
      })
    ).toEqual({
      ...initialState,
      detailedMovieId: '2'
    });
  });
});
