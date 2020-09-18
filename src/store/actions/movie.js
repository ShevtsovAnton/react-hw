import axios from 'axios';
import actions from '../actionTypes';

export const addMovieSuccess = movie => ({
  type: actions.ADD_MOVIE_SUCCESS,
  payload: movie
});

export const addMovieError = error => ({
  type: actions.ADD_MOVIE_ERROR,
  payload: error
});

export const addMovieRedux = movie => {
  return dispatch => {
    axios
      .post('http://localhost:4000/movies', movie)
      .then(response => {
        dispatch(addMovieSuccess(response));
      })
      .catch(error => {
        dispatch(addMovieError(error));
      });
  };
};

export const editMovieSuccess = updatedMovie => ({
  type: actions.EDIT_MOVIE_SUCCESS,
  payload: updatedMovie
});

export const editMovieError = error => ({
  type: actions.EDIT_MOVIE_ERROR,
  payload: error
});

export const editMovieRedux = id => {
  return dispatch => {
    axios
      .put('http://localhost:4000/movies', id)
      .then(response => {
        dispatch(editMovieSuccess(response.data));
      })
      .catch(error => {
        dispatch(editMovieError(error));
      });
  };
};

export const deleteMovieSuccess = id => ({
  type: actions.DELETE_MOVIE_SUCCESS,
  payload: id
});

export const deleteMovieError = error => ({
  type: actions.DELETE_MOVIE_ERROR,
  payload: error
});

export const deleteMovieRedux = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:4000/movies/${id}`)
      .then(() => {
        dispatch(deleteMovieSuccess(id));
      })
      .catch(error => {
        dispatch(deleteMovieError(error));
      });
  };
};
