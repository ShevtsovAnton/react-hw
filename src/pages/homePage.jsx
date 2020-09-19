import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../containers/MovieList';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { defaultMovie } from '../utils/misc';
import { filterMovies, getSortedMovies, search } from '../utils/helpers';
import { getMovies } from '../store/actions/movies';

function HomePage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailedMovie, setDetailedMovie] = useState(null);

  const sortBy = useSelector(state => state.sortBy);
  const filterBy = useSelector(state => state.filterBy);
  const searchQuery = useSelector(state => state.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const movieIds = useSelector(state => {
    const sortedMovies = getSortedMovies(state.movies, sortBy);
    if (searchQuery) {
      return search(sortedMovies, searchQuery).map(movie => movie.id);
    }
    return filterMovies(sortedMovies, filterBy).map(movie => movie.id);
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
