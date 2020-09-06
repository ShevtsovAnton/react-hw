import React, { useState } from 'react';

import MovieList from '../containers/MovieList';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import moviesList from '../utils/data';
import { defaultMovie } from '../utils/misc';
import helpers from '../utils/helpers';

function HomePage() {
  const [movies, setMovies] = useState(moviesList);
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSort = sortBy => {
    const sortedMovies = helpers.getSortedMovies(movies, sortBy);
    setMovies(sortedMovies);
  };

  const handleSearch = query => {
    if (query.trim() === '') {
      setMovies(moviesList);
      return;
    }
    const searchResults = moviesList.filter(movie =>
      movie.title.toUpperCase().includes(query.trim().toUpperCase())
    );
    setMovies(searchResults);
  };

  const handleFilter = filter => {
    if (filter === 'all') {
      setMovies(moviesList);
      return;
    }
    const filteredList = moviesList.filter(movie => {
      const formattedGenres = movie.genres.map(genre => genre.toUpperCase());
      return formattedGenres.includes(filter.toUpperCase());
    });
    setMovies(filteredList);
  };

  const deleteMovie = () => {
    const updatedMovieList = movies.filter(movie => movie.id !== selectedMovie.id);
    setMovies(updatedMovieList);
    setSelectedMovie(null);
  };

  const editMovie = editedMovie => {
    const foundIndex = movies.findIndex(movie => movie.id === editedMovie.id);
    setMovies([...movies.slice(0, foundIndex, 1), editedMovie, ...movies.slice(foundIndex + 1)]);
  };

  const addMovie = movie => {
    const newMovie = { ...movie, id: new Date().getTime() };
    setMovies([...movies, newMovie]);
  };

  const openModalAddMovie = () => {
    setSelectedMovie({ ...defaultMovie });
    setIsEditMode(false);
    setOpenAddEditModal(true);
  };

  return (
    <>
      <Header
        handleSearch={handleSearch}
        handleClick={openModalAddMovie}
        selectedMovie={selectedMovie}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
      />
      <MovieList
        movies={movies}
        handleSort={handleSort}
        handleFilter={handleFilter}
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
      />
      <Footer />
    </>
  );
}

export default HomePage;
