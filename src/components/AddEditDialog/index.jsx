import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../../store/actions/movie';

import useStyles from './styles';
import { genres, defaultMovie } from '../../utils/misc';
import movieType from '../../utils/movie.type';

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
            <form className={classes.root} noValidate autoComplete="off">
              {isEditMode ? (
                <TextField
                  className={classes.field}
                  label="MOVIE ID"
                  InputLabelProps={{
                    style: { color: '#f65261' }
                  }}
                  type="text"
                  value={selectedMovie.id ? selectedMovie.id : ''}
                  fullWidth
                  disabled
                />
              ) : null}

              <TextField
                className={classes.field}
                label="TITLE"
                InputLabelProps={{
                  style: { color: '#f65261' }
                }}
                type="text"
                value={selectedMovie.title}
                fullWidth
                onChange={e => handleChange(e, 'title')}
              />
              <TextField
                className={classes.field}
                label="RELEASE DATE"
                InputLabelProps={{
                  style: { color: '#f65261' },
                  shrink: true
                }}
                type="date"
                value={selectedMovie.release_date}
                fullWidth
                onChange={e => handleChange(e, 'release_date')}
              />
              <TextField
                className={classes.field}
                label="MOVIE URL"
                InputLabelProps={{
                  style: { color: '#f65261' }
                }}
                type="text"
                value={selectedMovie.poster_path}
                fullWidth
                onChange={e => handleChange(e, 'movieUrl')}
              />
              <FormControl className={classes.select}>
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
              </FormControl>
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
            </form>
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
