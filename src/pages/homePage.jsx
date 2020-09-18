import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../containers/MovieList';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import { defaultMovie } from '../utils/misc';
import helpers from '../utils/helpers';
import useDetailedMovieLogger from '../hooks/useDetailedMovieLogger';
import { getMovies } from '../store/actions/movies';

const search = (movies, query) => {
  if (query.trim() === '') {
    return movies;
  }
  const searchResults = movies.filter(movie =>
    movie.title.toUpperCase().includes(query.trim().toUpperCase())
  );
  return searchResults;
};

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

  const filterMovies = (movies, filter) => {
    if (filter === 'all') {
      return movies;
    }
    const filteredList = movies.filter(movie => {
      const formattedGenres = movie.genres.map(genre => genre.toUpperCase());
      return formattedGenres.includes(filter.toUpperCase());
    });
    return filteredList;
  };

  const movies = useSelector(state => {
    const sortedMovies = helpers.getSortedMovies(state.movies, sortBy);
    if (searchQuery) {
      return search(sortedMovies, searchQuery);
    }
    // const searchResult = search(sortedMovies, searchQuery);
    return filterMovies(sortedMovies, filterBy);
  });

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useDetailedMovieLogger(detailedMovie);

  const deleteMovie = useCallback(() => {
    // const updatedMovieList = movies.filter(movie => movie.id !== selectedMovie.id);
    // setMovies(updatedMovieList);
    setSelectedMovie(null);
  }, [selectedMovie]);

  const editMovie = useCallback(
    // editedMovie => {
    () => {
      // const foundIndex = movies.findIndex(movie => movie.id === editedMovie.id);
      // setMovies([...movies.slice(0, foundIndex, 1), editedMovie, ...movies.slice(foundIndex + 1)]);
    },
    [movies]
  );

  const addMovie = useCallback(
    // movie => {
    () => {
      // const newMovie = { ...movie, id: new Date().getTime() };
      // setMovies([...movies, newMovie]);
    },
    [movies]
  );

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
        movies={movies}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        openAddEditModal={openAddEditModal}
        setOpenAddEditModal={setOpenAddEditModal}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        deleteMovie={deleteMovie}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        editMovie={editMovie}
        addMovie={addMovie}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        setDetailedMovie={setDetailedMovie}
      />
      <Footer />
    </>
  );
}

export default HomePage;
