import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage';
import ErrorBoundary from './components/ErrorBoundary';
import NoMovieFound from './pages/NoMovieFound';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetail';

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
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/no-movie-found" />} />
              <Route path="/home" exact component={HomePage} />
              <Route path="/search" component={HomePage} />
              <Route path="/no-movie-found" exact component={NoMovieFound} />
              <Route path="/page-not-found" component={NotFound} />
              <Route path="/film/:id">
                <MovieDetail />
              </Route>
              <Route path="*" render={() => <Redirect to="/page-not-found" />} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

const AppWithHot = hot(module)(App);
export default AppWithHot;
