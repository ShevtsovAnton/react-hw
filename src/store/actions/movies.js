import axios from 'axios';
import actions from '../actionTypes';

export const getMoviesRequest = () => ({
  type: actions.GET_MOVIES_REQUEST
});

export const getMoviesSuccess = movies => {
  return {
    type: actions.GET_MOVIES_SUCCESS,
    movies
  };
};

export const getMoviesError = error => ({
  type: actions.GET_MOVIES_ERROR,
  error
});

export const getMovies = () => {
  return dispatch => {
    dispatch(getMoviesRequest());
    axios('http://localhost:4000/movies', { params: { limit: '15' } })
      .then(result => {
        const movies = result.data.data;
        dispatch(getMoviesSuccess(movies));
      })
      .catch(error => {
        dispatch(getMoviesError(error));
      });
  };
};
