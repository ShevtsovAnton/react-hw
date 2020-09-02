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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  dialogContent: {
    color: '#ffffff'
  }
}));

export default function Delete({ openDeleteModal, deleteMovie, closeModalMovieDeletion }) {
  const classes = useStyles();

  const handleConfirm = () => {
    deleteMovie();
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

Delete.propTypes = {
  closeModalMovieDeletion: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.bool.isRequired,
  deleteMovie: PropTypes.func.isRequired
};
