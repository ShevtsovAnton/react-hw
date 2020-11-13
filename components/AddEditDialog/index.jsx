import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { addMovie, editMovie } from '../store/actions/movie';
import useStyles from './styles';
import { genres, defaultMovie } from '../../src/utils/misc';
import movieType from '../../src/utils/movie.type';
import FormikField from '../FormikField';
import FormikSelect from '../FormikSelect';
import FormikFieldUsingHook from '../FormikFieldUsingHook';

const validationSchema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required('Please enter title'),
  release_date: Yup.date().required('Please select release date'),
  poster_path: Yup.string()
    .url('Invalid url')
    .required('Please enter URL to movie poster'),
  genres: Yup.array()
    .of(Yup.string())
    .required('Please select at least one genre'),
  overview: Yup.string().required('Please enter overview'),
  runtime: Yup.number()
    .min(1, "Runtime can't be 0 or less")
    .required('Please enter runtime in minutes')
});

const getInitialValues = selectedMovie => {
  const initialValues = {
    title: selectedMovie.title || '',
    release_date: selectedMovie.release_date || '',
    poster_path: selectedMovie.poster_path || '',
    genres: selectedMovie.genres || [],
    overview: selectedMovie.overview || '',
    runtime: selectedMovie.runtime || ''
  };
  if (selectedMovie.id) {
    initialValues.id = selectedMovie.id;
  }
  return initialValues;
};

function AddEditDialog({
  selectedMovie,
  setSelectedMovie,
  setOpenAddEditModal,
  isEditMode,
  openAddEditModal
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleReset = () => {
    setSelectedMovie({
      ...defaultMovie
    });
  };

  const handleClose = () => {
    setOpenAddEditModal(false);
    setSelectedMovie(null);
  };

  const handleSubmit = values => {
    if (!selectedMovie.id) {
      dispatch(addMovie({ ...values }));
    } else {
      dispatch(editMovie({ ...values }));
    }
    handleClose();
  };
  return (
    <>
      {selectedMovie ? (
        <Formik
          initialValues={getInitialValues(selectedMovie)}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Dialog
            open={openAddEditModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Form className={classes.root} autoComplete="off">
              <DialogTitle id="alert-dialog-title">
                {isEditMode ? 'EDIT MOVIE' : 'ADD MOVIE'}
              </DialogTitle>
              <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <DialogContent>
                {isEditMode ? (
                  <FormikField name="id" label="MOVIE ID" type="text" fullWidth disabled />
                ) : null}
                <FormikField name="title" label="TITLE" type="text" fullWidth />
                <FormikField name="release_date" label="RELEASE DATE" type="date" fullWidth />
                <FormikField name="poster_path" label="MOVIE URL" type="text" fullWidth />
                <FormikSelect name="genres" genres={genres} label="GENRES" />
                <FormikField name="overview" label="OVERVIEW" type="text" fullWidth />
                <FormikFieldUsingHook name="runtime" label="RUNTIME" type="number" fullWidth />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleReset} color="primary">
                  RESET
                </Button>
                <Button type="submit" color="primary" autoFocus>
                  SUBMIT
                </Button>
              </DialogActions>
            </Form>
          </Dialog>
        </Formik>
      ) : (
        ''
      )}
    </>
  );
}

AddEditDialog.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  setOpenAddEditModal: PropTypes.func.isRequired,
  openAddEditModal: PropTypes.bool.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  selectedMovie: movieType
};

AddEditDialog.defaultProps = {
  selectedMovie: null
};

export default AddEditDialog;
