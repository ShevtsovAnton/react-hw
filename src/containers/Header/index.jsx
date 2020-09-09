import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

import Logo from '../../components/Logo';
import MovieDetail from '../../components/MovieDetail';
import FindMovie from '../../components/Search';
import movieType from '../../utils/movie.type';

function Header({ handleSearch, handleClick, showDetail, selectedMovie, setShowDetail }) {
  const classes = useStyles();

  return (
    <Container className={classes.headerContainer} maxWidth="lg">
      <Grid container justify="space-between">
        <Logo />
        {showDetail ? (
          <SearchIcon
            className={classes.searchIcon}
            onClick={() => {
              setShowDetail(false);
            }}
          />
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleClick}
          >
            ADD MOVIE
          </Button>
        )}
      </Grid>
      {showDetail ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        <Grid container className={classes.searchContainer}>
          <FindMovie handleSearch={handleSearch} />
        </Grid>
      )}
    </Container>
  );
}

export default Header;

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedMovie: movieType,
  showDetail: PropTypes.bool.isRequired,
  setShowDetail: PropTypes.func.isRequired
};

Header.defaultProps = {
  selectedMovie: null
};
