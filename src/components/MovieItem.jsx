import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import baseUrl from '../utils/api';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: '0.4s ease-out',
    '&:hover $cardHeader': {
      display: 'block'
    }
  },
  cardMedia: {
    height: 400
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: theme.palette.info.main,
    paddingLeft: 0,
    paddingRight: 0
  },
  cardHeader: {
    position: 'absolute',
    top: 5,
    right: 5,
    display: 'none'
  },
  iconButton: {
    backgroundColor: theme.palette.info.main
  },
  titleAndYear: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  releaseYear: {
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: '0.8rem'
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 0
  },
  closeContainer: {
    position: 'relative',
    marginBottom: 25
  },
  menu: {
    position: 'absolute',
    right: 0,
    top: 0
  }
}));

export default function MovieItem({
  movie,
  setIsEditMode,
  setOpenAddEditModal,
  setOpenDeleteModal,
  setSelectedMovie
}) {
  const classes = useStyles();
  const { title, releaseDate, genres, backdropPath } = movie;
  const releaseYear = releaseDate.substr(0, 4);
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
          className={classes.cardMedia}
          image={`${baseUrl}${backdropPath} `}
          title="Image title"
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
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    backdropPath: PropTypes.string.isRequired
  }).isRequired,
  setIsEditMode: PropTypes.func.isRequired,
  setOpenAddEditModal: PropTypes.func.isRequired,
  setOpenDeleteModal: PropTypes.func.isRequired,
  setSelectedMovie: PropTypes.func.isRequired
};
