import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieList from '../../components/MovieList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MovieDetail from '../../components/MovieDetail';

import { defaultMovie } from '../../src/utils/misc';
import { getFilteredMoviesIds, getSearchedMoviesIds } from '../../src/utils/selectors';
import { getMovies } from '../../components/store/actions/movies';
import searchBy from '../../components/store/actions/search';

import { useRouter } from 'next/router';

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
