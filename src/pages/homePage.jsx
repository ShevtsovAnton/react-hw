import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieList from '../containers/MovieList';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { defaultMovie } from '../utils/misc';
import { getFilteredMoviesIds, getSearchedMoviesIds } from '../utils/selectors';
import { getMovies } from '../store/actions/movies';

function HomePage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailedMovie, setDetailedMovie] = useState(null);
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchQuery);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const movieIds = useSelector(state => {
    if (searchQuery === '') {
      return getFilteredMoviesIds(state);
    }
    return getSearchedMoviesIds(state);
  });

  const openModalAddMovie = useCallback(() => {
    setSelectedMovie({ ...defaultMovie });
    setIsEditMode(false);
    setOpenAddEditModal(true);
  }, []);

  return (
    <>
      <Header
        handleClick={openModalAddMovie}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        detailedMovie={detailedMovie}
      />
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
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        setDetailedMovie={setDetailedMovie}
      />
      <Footer />
    </>
  );
}

export default HomePage;
