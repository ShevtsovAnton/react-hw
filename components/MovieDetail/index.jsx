import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import { getMovie } from '../../src/utils/selectors';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getMovieDetails } from '../../components/Store/actions/movie';

export default function MovieDetail() {
  const classes = useStyles();

  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch]);

  const detailedMovie = useSelector(state => state.detailedMovie);

  const movie = detailedMovie || {};
  const { title, release_date, poster_path, overview, vote_average, runtime, mediaType } = movie;
  const releaseYear = release_date ? release_date.substr(0, 4) : '';

  return (
    <Container className={classes.main} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img alt="movie_poster" src={poster_path} className={classes.image} />
        </Grid>
        <Grid item xs={8}>
          <div className={classes.header}>
            <Typography variant="h3">{title}</Typography>
            <div className={classes.rating}>{vote_average || 'N/A'}</div>
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
      <Link href="/">
        <Button variant="contained">Go Back To Home</Button>
      </Link>
    </Container>
  );
}
