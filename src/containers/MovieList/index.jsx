import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

import MovieItem from '../../components/MovieItem';
import Filter from '../../components/Filter';
import Sort from '../../components/Sort';
import ModalMovieDeletion from '../../components/ModalMovieDeletion';
import AddEditDialog from '../../components/AddEditDialog';
import getCountMessage from './helpers';
import movieType from '../../utils/movie.type';

export default function MovieList({
  setIsEditMode,
  isEditMode,
  setOpenAddEditModal,
  openAddEditModal,
  setOpenDeleteModal,
  openDeleteModal,
  setSelectedMovie,
  selectedMovie,
  movieIds
}) {
  const classes = useStyles();
  const countMessage = getCountMessage(movieIds);

  const closeModalMovieDeletion = useCallback(() => {
    setOpenDeleteModal(false);
    setSelectedMovie(null);
  });

  return (
    <Container className={classes.main} maxWidth="lg">
      <Grid className={classes.controlGrid} container justify="space-between">
        <Filter />
        <Sort />
      </Grid>
      <Typography variant="h6" className={classes.found}>
        {countMessage}
      </Typography>
      <Grid container spacing={4}>
        {movieIds.map(id => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <MovieItem
              id={id}
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
        selectedMovie={selectedMovie}
      />
      <AddEditDialog
        isEditMode={isEditMode}
        openAddEditModal={openAddEditModal}
        setOpenAddEditModal={setOpenAddEditModal}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
    </Container>
  );
}

MovieList.propTypes = {
  setIsEditMode: PropTypes.func.isRequired,
  openAddEditModal: PropTypes.bool.isRequired,
  setOpenAddEditModal: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.bool.isRequired,
  selectedMovie: movieType,
  setSelectedMovie: PropTypes.func.isRequired,
  movieIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

MovieList.defaultProps = {
  selectedMovie: null
};
