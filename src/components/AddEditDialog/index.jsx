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
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';
import { genres, defaultMovie } from '../../utils/misc';

class AddEditDialog extends React.Component {
  handleReset = () => {
    const { selectedMovie, setSelectedMovie } = this.props;
    setSelectedMovie({
      ...selectedMovie,
      ...defaultMovie
    });
  };

  handleGenres = event => {
    const { selectedMovie, setSelectedMovie } = this.props;
    setSelectedMovie({
      ...selectedMovie,
      genres: event.target.value
    });
  };

  handleChange = (event, field) => {
    const { selectedMovie, setSelectedMovie } = this.props;
    setSelectedMovie({
      ...selectedMovie,
      [field]: event.target.value
    });
  };

  handleClose = () => {
    const { setOpenAddEditModal, setSelectedMovie } = this.props;
    setOpenAddEditModal(false);
    setSelectedMovie(null);
  };

  submit = () => {
    const { editMovie, selectedMovie, addMovie } = this.props;
    if (!selectedMovie.id) {
      addMovie(selectedMovie);
    } else {
      editMovie(selectedMovie);
    }
    this.handleClose();
  };

  render() {
    const { classes, isEditMode, openAddEditModal, selectedMovie } = this.props;
    return (
      <>
        {selectedMovie ? (
          <Dialog
            open={openAddEditModal}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {isEditMode ? 'EDIT MOVIE' : 'ADD MOVIE'}
            </DialogTitle>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <form className={classes.root} noValidate autoComplete="off">
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
                <TextField
                  className={classes.field}
                  label="TITLE"
                  InputLabelProps={{
                    style: { color: '#f65261' }
                  }}
                  type="text"
                  value={selectedMovie.title}
                  fullWidth
                  onChange={e => this.handleChange(e, 'title')}
                />
                <TextField
                  className={classes.field}
                  label="RELEASE DATE"
                  InputLabelProps={{
                    style: { color: '#f65261' },
                    shrink: true
                  }}
                  type="date"
                  value={selectedMovie.releaseDate}
                  fullWidth
                  onChange={e => this.handleChange(e, 'releaseDate')}
                />
                <TextField
                  className={classes.field}
                  label="MOVIE URL"
                  InputLabelProps={{
                    style: { color: '#f65261' }
                  }}
                  type="text"
                  value={selectedMovie.movieUrl}
                  fullWidth
                  onChange={e => this.handleChange(e, 'movieUrl')}
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
                    onChange={this.handleGenres}
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
                  onChange={e => this.handleChange(e, 'overview')}
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
                  onChange={e => this.handleChange(e, 'runtime')}
                  fullWidth
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleReset} color="primary">
                RESET
              </Button>
              <Button onClick={this.submit} color="primary" autoFocus>
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
}

AddEditDialog.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    closeButton: PropTypes.string,
    field: PropTypes.string,
    select: PropTypes.string,
    label: PropTypes.string
  }).isRequired,
  isEditMode: PropTypes.bool.isRequired,
  setOpenAddEditModal: PropTypes.func.isRequired,
  openAddEditModal: PropTypes.bool.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    backdropPath: PropTypes.string,
    overview: PropTypes.string,
    movieUrl: PropTypes.string,
    runtime: PropTypes.number
  }),
  editMovie: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired
};

AddEditDialog.defaultProps = {
  selectedMovie: null
};

export default withStyles(styles)(AddEditDialog);
