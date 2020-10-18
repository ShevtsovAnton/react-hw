import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

import Logo from '../../components/Logo';
import Search from '../../components/Search';

function Header({ handleClick }) {
  const classes = useStyles();
  const showDetail = useSelector(state => state.isMovieDetailsShown);

  return (
    <Container className={classes.headerContainer} maxWidth="lg">
      <Grid container justify="space-between">
        <Logo />
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
      </Grid>
      {showDetail ? null : (
        <Grid container className={classes.searchContainer}>
          <Search />
        </Grid>
      )}
    </Container>
  );
}

export default Header;

Header.defaultProps = {
  handleClick: () => {}
};
Header.propTypes = {
  handleClick: PropTypes.func
};
