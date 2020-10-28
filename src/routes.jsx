import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NoMovieFound from './pages/NoMovieFound';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetail';
import HomePage from './pages/homePage';

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/no-movie-found" />} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/search" component={HomePage} />
      <Route path="/no-movie-found" exact component={NoMovieFound} />
      <Route path="/page-not-found" component={NotFound} />
      <Route path="/film/:id" component={MovieDetail} />
      <Route path="*" render={() => <Redirect to="/page-not-found" />} />
    </Switch>
  </Router>
);

export default createRoutes;
