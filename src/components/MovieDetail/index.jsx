import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import baseUrl from '../../utils/api';
import useStyles from './styles';

export default function MovieDetail({ movie }) {
  const classes = useStyles();
  const { title, releaseDate, posterPath, overview, voteAverage, duration, mediaType } = movie;
  const releaseYear = releaseDate.substr(0, 4);

  return (
    <>
      <Container className={classes.main} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img alt="movie_poster" src={`${baseUrl}${posterPath}`} className={classes.image} />
          </Grid>
          <Grid item xs={8}>
            <div className={classes.header}>
              <Typography variant="h3">{title}</Typography>
              <div className={classes.rating}>{voteAverage}</div>
            </div>
            <Typography variant="body1">{mediaType}</Typography>
            <div className={classes.detailsBlock}>
              <Typography variant="h5">{releaseYear}</Typography>
              <Typography variant="h5" className={classes.duration}>
                {`${duration} min`}
              </Typography>
            </div>
            <Typography variant="body1">{overview}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    posterPath: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    voteAverage: PropTypes.number,
    duration: PropTypes.number,
    mediaType: PropTypes.string
  }).isRequired
};
