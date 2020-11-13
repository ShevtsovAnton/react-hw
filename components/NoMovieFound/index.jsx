import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import useStyles from './styles';

function NoMovieFound() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container} maxWidth="lg">
        No Movie Found
      </Container>
      <Footer />
    </>
  );
}

export default NoMovieFound;
