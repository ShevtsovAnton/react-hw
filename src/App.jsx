import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';

import MovieList from './constainers/MovieList';
import Header from './constainers/Header';
import Footer from './constainers/Footer';

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <MovieList />
        <Footer />
      </ThemeProvider>
    </>
  );
}

const AppWithHot = hot(module)(App);
export default AppWithHot;
