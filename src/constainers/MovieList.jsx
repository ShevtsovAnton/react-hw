import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MovieItem from '../components/MovieItem';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import movies from '../utils/data';

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    marginTop: theme.spacing(2),
    backgroundColor: '#232323'
  },
  controlGrid: {
    borderBottom: '2px solid #555555'
  },
  found: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
}));

const countMessage = `${movies.length || 'No'} movie${movies.length === 1 ? '' : 's'} found`;

export default function MovieList() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.main} maxWidth="lg">
        <Grid className={classes.controlGrid} container justify="space-between">
          <Filter />
          <Sort />
        </Grid>
        <Typography variant="h6" className={classes.found}>
          {countMessage}
        </Typography>
        <Grid container spacing={4}>
          {movies.map(movie => (
            <Grid item key={movie.id} xs={12} sm={6} md={4}>
              <MovieItem movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
