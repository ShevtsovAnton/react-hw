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
  const handleSortEvent = sortBy => {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <Header />
          <MovieList movies={movies} handleSortEvent={handleSortEvent} />
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

const AppWithHot = hot(module)(App);
export default AppWithHot;
