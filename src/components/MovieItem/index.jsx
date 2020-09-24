import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { imageFallbackSrc } from '../../utils/misc';

export default function MovieItem({
  id,
  setIsEditMode,
  setOpenAddEditModal,
  setOpenDeleteModal,
  setSelectedMovie,
  setShowDetail,
  setDetailedMovie
}) {
  const classes = useStyles();
  const movie = useSelector(state => state.movies.filter(movieItem => movieItem.id === id)[0]);
  const { title, release_date, genres, poster_path } = movie;
  const releaseYear = release_date.substr(0, 4);
  const genre = genres.join(' & ');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleEdit = () => {
    setIsEditMode(true);
    setOpenAddEditModal(true);
    setSelectedMovie(movie);
    setAnchorEl(null);
  };
  const handleDelete = () => {
    setOpenDeleteModal(true);
    setSelectedMovie(movie);
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImageClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setDetailedMovie(movie);
    setShowDetail(true);
  }, [movie]);

  const handleImageError = e => {
    e.target.onerror = null;
    e.target.src = imageFallbackSrc;
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          action={
            <>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.iconButton}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: '20ch'
                  }
                }}
              >
                <div className={classes.closeContainer}>
                  <CloseIcon className={classes.closeIcon} onClick={handleClose} />
                </div>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </>
          }
        />
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={poster_path}
          title="Image title"
          onClick={handleImageClick}
          onError={handleImageError}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.titleAndYear}>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body1" className={classes.releaseYear}>
              {releaseYear}
            </Typography>
          </div>
          <Typography variant="body2">{genre}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  setIsEditMode: PropTypes.func.isRequired,
  setOpenAddEditModal: PropTypes.func.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  setShowDetail: PropTypes.func.isRequired,
  setDetailedMovie: PropTypes.func.isRequired
};
