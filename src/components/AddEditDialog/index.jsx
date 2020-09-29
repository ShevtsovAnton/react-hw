import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
// import Chip from '@material-ui/core/Chip';
import DialogTitle from '@material-ui/core/DialogTitle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { addMovie, editMovie } from '../../store/actions/movie';
import useStyles from './styles';
import { genres, defaultMovie } from '../../utils/misc';
import movieType from '../../utils/movie.type';
import FormikField from '../FormikField';
import FormikSelect from '../FormikSelect';

function AddEditDialog({
  selectedMovie,
  setSelectedMovie,
  setOpenAddEditModal,
  isEditMode,
  openAddEditModal
}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const formRef = useRef();
  const handleReset = () => {
    setSelectedMovie({
      ...defaultMovie
    });
  };

  const handleGenres = event => {
    setSelectedMovie({
      ...selectedMovie,
      genres: event.target.value
    });
  };

  const handleChange = (event, field) => {
    const value = field === 'runtime' ? +event.target.value : event.target.value;

    setSelectedMovie({
      ...selectedMovie,
      [field]: value
    });
  };

  const handleClose = () => {
    setOpenAddEditModal(false);
    setSelectedMovie(null);
  };

  const submit = () => {
    if (!selectedMovie.id) {
      dispatch(addMovie(selectedMovie));
    } else {
      dispatch(editMovie(selectedMovie));
    }
    handleClose();
  };
  return (
    <>
      {selectedMovie ? (
        <Dialog
          open={openAddEditModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {isEditMode ? 'EDIT MOVIE' : 'ADD MOVIE'}
          </DialogTitle>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <Formik
              initialValues={{
                title: '',
                release_date: '',
                movieUrl: '',
                genres: [],
                overview: '',
                runtime: 0,
                test: ''
              }}
              validationSchema={Yup.object({
                title: Yup.string()
                  .max(4, 'Must be 4 characters or less')
                  .required()
              })}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form className={classes.root} autoComplete="off">
                {isEditMode ? (
                  <FormikField
                    name="id"
                    className={classes.field}
                    label="MOVIE ID"
                    type="text"
                    value={selectedMovie.id ? selectedMovie.id : ''}
                    fullWidth
                    disabled
                  />
                ) : null}

                <FormikField
                  name="title"
                  className={classes.field}
                  label="TITLE"
                  type="text"
                  value={selectedMovie.title}
                  fullWidth
                  onChange={e => handleChange(e, 'title')}
                />
                <FormikField
                  name="release_date"
                  className={classes.field}
                  label="RELEASE DATE"
                  type="date"
                  value={selectedMovie.release_date}
                  fullWidth
                  onChange={e => handleChange(e, 'release_date')}
                />
                <FormikField
                  name="movieUrl"
                  className={classes.field}
                  label="MOVIE URL"
                  type="text"
                  value={selectedMovie.poster_path}
                  fullWidth
                  onChange={e => handleChange(e, 'movieUrl')}
                />
                <FormikSelect
                  name="GENRES"
                  value={selectedMovie.genres}
                  genres={genres}
                  label="GENRES"
                  onChange={handleGenres}
                  className={classes.select}
                />
                {/* <FormControl className={classes.select}>
                  <InputLabel id="genres" className={classes.label}>
                    GENRES
                  </InputLabel>
                  <Select
                    labelId="genres"
                    id="genres__select"
                    multiple
                    value={selectedMovie.genres}
                    onChange={handleGenres}
                    input={<Input id="select__multiple" />}
                    renderValue={selected => (
                      <div>
                        {selected.map(value => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                  >
                    {genres.map(genre => (
                      <MenuItem key={genre} value={genre}>
                        {genre}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                <TextField
                  className={classes.field}
                  label="OVERVIEW"
                  InputLabelProps={{
                    style: { color: '#f65261' }
                  }}
                  type="text"
                  value={selectedMovie.overview}
                  onChange={e => handleChange(e, 'overview')}
                  fullWidth
                />
                <TextField
                  className={classes.field}
                  label="RUNTIME"
                  InputLabelProps={{
                    style: { color: '#f65261' }
                  }}
                  type="number"
                  value={selectedMovie.runtime}
                  onChange={e => handleChange(e, 'runtime')}
                  fullWidth
                />
                <FormikField name="test" label="test" />
              </Form>
            </Formik>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleReset} color="primary">
              RESET
            </Button>
            <Button onClick={submit} color="primary" autoFocus>
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>
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
