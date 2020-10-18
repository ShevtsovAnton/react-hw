import React from 'react';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import useStyles from './styles';

function NoMovieFound() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.container}>No Movie Found</div>
      <Footer />
    </>
  );
}

export default NoMovieFound;
