import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';

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
    backgroundColor: '#232323'
  },
  titleAndYear: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  releaseYear: {
    border: '1px solid white',
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: '0.8rem'
  }
}));

export default function MovieItem({ movie }) {
  const classes = useStyles();
  const { id, title, releaseYear, genre } = movie;
  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          action={
            <IconButton className={classes.iconButton}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.titleAndYear}>
            <Typography variant="body1">{`${title} ${id}`}</Typography>
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
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};
