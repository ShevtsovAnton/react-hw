import React from 'react';
import MovieDetail from '../../src/components/MovieDetail';
import axios from 'axios';
import { initializeStore } from '../../src/store';
import { getMovieDetailsSuccess } from '../../src/store/actions/movie';

const details = () => {
  return <MovieDetail />;
};

export default details;

export async function getServerSideProps(context) {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  const { id } = context.params;
  const movie = await axios.get(`http://localhost:4000/movies/${id}`);

  dispatch(getMovieDetailsSuccess(movie.data));

  return { props: { initialReduxState: reduxStore.getState() } };
}
