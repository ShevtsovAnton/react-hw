import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MovieItem from '../../components/MovieItem';
import Filter from '../../components/Filter';
import Sort from '../../components/Sort';
import ModalMovieDeletion from '../../components/ModalMovieDeletion';
import AddEditDialog from '../../components/AddEditDialog';
import getCountMessage from './helpers';
import useStyles from './styles';

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
  const countMessage = getCountMessage(movies);

  const closeModalMovieDeletion = () => {
    setOpenDeleteModal(false);
    setSelectedMovie(null);
  };

  return (
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
      <ModalMovieDeletion
        openDeleteModal={openDeleteModal}
        closeModalMovieDeletion={closeModalMovieDeletion}
        deleteMovie={deleteMovie}
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
