import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MovieItem from '../components/MovieItem';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.info.main
  },
  controlGrid: {
    borderBottom: `2px solid ${theme.palette.text.secondary}`
  },
  found: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
}));

export default function MovieList({ movies, handleSortEvent }) {
  const classes = useStyles();
  const countMessage = `${movies.length || 'No'} movie${movies.length === 1 ? '' : 's'} found`;

  return (
    <>
      <Container className={classes.main} maxWidth="lg">
        <Grid className={classes.controlGrid} container justify="space-between">
          <Filter />
          <Sort handleSortEvent={handleSortEvent} />
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      backdropPath: PropTypes.string.isRequired
    })
  ).isRequired,
  handleSortEvent: PropTypes.func.isRequired
};
