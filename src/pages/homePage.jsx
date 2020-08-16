import React, { useState } from 'react';

import MovieList from '../constainers/MovieList';
import Header from '../constainers/Header';
import Footer from '../constainers/Footer';
import moviesList from '../utils/data';

function HomePage() {
  const [movies, setMovies] = useState(moviesList);

  const handleSort = sortBy => {
    const sortedMovies = [
      ...movies.sort((a, b) => {
        const valueA = a[sortBy].toUpperCase();
        const valueB = b[sortBy].toUpperCase();
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      })
    ];
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
      const formatedGenres = movie.genres.map(genre => genre.toUpperCase());
      return formatedGenres.includes(filter.toUpperCase());
    });
    setMovies(filteredList);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <MovieList movies={movies} handleSort={handleSort} handleFilter={handleFilter} />
      <Footer />
    </>
  );
}

export default HomePage;
