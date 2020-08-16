import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';

import MovieList from './constainers/MovieList';
import Header from './constainers/Header';
import Footer from './constainers/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import moviesList from './utils/data';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f65261'
    },
    secondary: {
      main: '#424242'
    },
    info: {
      main: '#232323'
    },
    text: {
      primary: '#ffffff',
      secondary: '#555555'
    },
    background: {
      default: '#555555'
    }
  }
});

function App() {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Header handleSearch={handleSearch} />
          <MovieList movies={movies} handleSort={handleSort} handleFilter={handleFilter} />
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

const AppWithHot = hot(module)(App);
export default AppWithHot;
