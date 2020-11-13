import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { deleteMovieRedux } from '../store/actions/movie';
import movieType from '../../src/utils/movie.type';

import useStyles from './styles';

export default function ModalMovieDeletion({
  openDeleteModal,
  closeModalMovieDeletion,
  selectedMovie
}) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleConfirm = () => {
    dispatch(deleteMovieRedux(selectedMovie.id));
    closeModalMovieDeletion();
  };

  return (
    <div>
      <Dialog
        open={openDeleteModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">DELETE MOVIE</DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={closeModalMovieDeletion}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText className={classes.dialogContent} id="alert-dialog-description">
            Are you sure you want to delete this movie?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ModalMovieDeletion.propTypes = {
  closeModalMovieDeletion: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.bool.isRequired,
  selectedMovie: movieType
};

ModalMovieDeletion.defaultProps = {
  selectedMovie: null
};
