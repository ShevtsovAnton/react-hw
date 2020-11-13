import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import MovieList from '../../src/containers/MovieList';
import Header from '../../src/containers/Header';
import Footer from '../../src/containers/Footer';
import MovieDetail from '../../src/components/MovieDetail';

import { defaultMovie } from '../../src/utils/misc';
import { getFilteredMoviesIds, getSearchedMoviesIds } from '../../src/utils/selectors';
import { getMovies, getMoviesSuccess } from '../../src/store/actions/movies';
import searchBy from '../../src/store/actions/search';

import { useRouter } from 'next/router';

import { initializeStore } from '../../src/store';

function Movies() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();

  const router = useRouter();
  if (router.query.query) {
    dispatch(searchBy(router.query.query));
  } else {
    dispatch(searchBy(''));
  }

  const searchQuery = useSelector(state => state.searchQuery);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const movieIds = !searchQuery
    ? useSelector(state => getFilteredMoviesIds(state))
    : useSelector(state => getSearchedMoviesIds(state));

  const openModalAddMovie = useCallback(() => {
    setSelectedMovie({ ...defaultMovie });
    setIsEditMode(false);
    setOpenAddEditModal(true);
  }, []);

  return (
    <>
      <Header handleClick={openModalAddMovie} />

      <MovieList
        movieIds={movieIds}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        openAddEditModal={openAddEditModal}
        setOpenAddEditModal={setOpenAddEditModal}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <Footer />
    </>
  );
}

export default Movies;

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const movies = await axios.get('http://localhost:4000/movies', { params: { limit: '15' } });

  dispatch(getMoviesSuccess(movies.data.data));

  return { props: { initialReduxState: reduxStore.getState() } };
}
