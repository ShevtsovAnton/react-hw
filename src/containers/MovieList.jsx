import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MovieItem from '../components/MovieItem';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Delete from '../components/Delete';
import AddEditDialog from '../components/AddEditDialog';

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

export default function MovieList({
  movies,
  handleSort,
  handleFilter,
  setIsEditMode,
  isEditMode,
  setOpenAddEditModal,
  openAddEditModal,
  setOpenDeleteModal,
  openDeleteModal,
  deleteMovie,
  setSelectedMovie,
  selectedMovie,
  editMovie,
  addMovie
}) {
  const classes = useStyles();
  const countMessage = `${movies.length || 'No'} movie${movies.length === 1 ? '' : 's'} found`;

  return (
    <>
      <Container className={classes.main} maxWidth="lg">
        <Grid className={classes.controlGrid} container justify="space-between">
          <Filter handleFilter={handleFilter} />
          <Sort handleSort={handleSort} />
        </Grid>
        <Typography variant="h6" className={classes.found}>
          {countMessage}
        </Typography>
        <Grid container spacing={4}>
          {movies.map(movie => (
            <Grid item key={movie.id} xs={12} sm={6} md={4}>
              <MovieItem
                movie={movie}
                setIsEditMode={setIsEditMode}
                setOpenAddEditModal={setOpenAddEditModal}
                setOpenDeleteModal={setOpenDeleteModal}
                setSelectedMovie={setSelectedMovie}
              />
            </Grid>
          ))}
        </Grid>
        <Delete
          setOpenDeleteModal={setOpenDeleteModal}
          openDeleteModal={openDeleteModal}
          deleteMovie={deleteMovie}
          setSelectedMovie={setSelectedMovie}
        />
        <AddEditDialog
          isEditMode={isEditMode}
          openAddEditModal={openAddEditModal}
          setOpenAddEditModal={setOpenAddEditModal}
          selectedMovie={selectedMovie}
          editMovie={editMovie}
          setSelectedMovie={setSelectedMovie}
          addMovie={addMovie}
        />
      </Container>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      releaseDate: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
      backdropPath: PropTypes.string
    }).isRequired
  ).isRequired,
  handleSort: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  setIsEditMode: PropTypes.func.isRequired,
  openAddEditModal: PropTypes.bool.isRequired,
  setOpenAddEditModal: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.bool.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    backdropPath: PropTypes.string
  }),
  setSelectedMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired
};

MovieList.defaultProps = {
  selectedMovie: null
};
