import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import movieType from '../../utils/movie.type';

export default function MovieDetail({ movie }) {
  const classes = useStyles();
  const { title, release_date, poster_path, overview, vote_average, runtime, mediaType } = movie;
  const releaseYear = release_date.substr(0, 4);
  console.log(poster_path);
  return (
    <>
      <Container className={classes.main} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img alt="movie_poster" src={poster_path} className={classes.image} />
          </Grid>
          <Grid item xs={8}>
            <div className={classes.header}>
              <Typography variant="h3">{title}</Typography>
              <div className={classes.rating}>{vote_average}</div>
            </div>
            <Typography variant="body1">{mediaType}</Typography>
            <div className={classes.detailsBlock}>
              <Typography variant="h5">{releaseYear}</Typography>
              <Typography variant="h5" className={classes.duration}>
                {`${runtime} min`}
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
  movie: movieType
};

MovieDetail.defaultProps = {
  movie: null
};
