import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';

import MovieList from '../containers/MovieList';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import MovieDetail from '../components/MovieDetail';

import { defaultMovie } from '../utils/misc';
import { getFilteredMoviesIds, getSearchedMoviesIds } from '../utils/selectors';
import { getMovies } from '../store/actions/movies';
import searchBy from '../store/actions/search';

function HomePage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchQuery);
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const query = search.get('query');
  dispatch(searchBy(query));

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

      <Route path="/film/:id">
        <MovieDetail />
      </Route>

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

export default HomePage;
