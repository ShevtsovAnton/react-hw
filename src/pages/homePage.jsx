import React, { useState, useEffect, useCallback } from 'react';

import MovieList from '../containers/MovieList';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import moviesList from '../utils/data';
import { defaultMovie } from '../utils/misc';
import helpers from '../utils/helpers';
import useDetailedMovieLogger from '../hooks/useDetailedMovieLogger';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailedMovie, setDetailedMovie] = useState(null);

  useEffect(() => {
    setMovies([...moviesList]);
  }, [moviesList]);

  useDetailedMovieLogger(detailedMovie);

  const handleSort = useCallback(
    sortBy => {
      const sortedMovies = helpers.getSortedMovies(movies, sortBy);
      setMovies(sortedMovies);
    },
    [movies]
  );

  const handleSearch = useCallback(
    query => {
      if (query.trim() === '') {
        setMovies(moviesList);
        return;
      }
      const searchResults = moviesList.filter(movie =>
        movie.title.toUpperCase().includes(query.trim().toUpperCase())
      );
      setMovies(searchResults);
    },
    [moviesList]
  );

  const handleFilter = useCallback(
    filter => {
      if (filter === 'all') {
        setMovies(moviesList);
        return;
      }
      const filteredList = moviesList.filter(movie => {
        const formattedGenres = movie.genres.map(genre => genre.toUpperCase());
        return formattedGenres.includes(filter.toUpperCase());
      });
      setMovies(filteredList);
    },
    [moviesList]
  );

  const deleteMovie = useCallback(() => {
    const updatedMovieList = movies.filter(movie => movie.id !== selectedMovie.id);
    setMovies(updatedMovieList);
    setSelectedMovie(null);
  }, [selectedMovie]);

  const editMovie = useCallback(
    editedMovie => {
      const foundIndex = movies.findIndex(movie => movie.id === editedMovie.id);
      setMovies([...movies.slice(0, foundIndex, 1), editedMovie, ...movies.slice(foundIndex + 1)]);
    },
    [movies]
  );

  const addMovie = useCallback(
    movie => {
      const newMovie = { ...movie, id: new Date().getTime() };
      setMovies([...movies, newMovie]);
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
        handleSearch={handleSearch}
        handleClick={openModalAddMovie}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        detailedMovie={detailedMovie}
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
        setDetailedMovie={setDetailedMovie}
      />
      <Footer />
    </>
  );
}

export default HomePage;
