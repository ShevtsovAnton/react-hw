import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Logo from '../../components/Logo';
import FindMovie from '../../components/Search';
import useStyles from './styles';

function Header({ handleSearch, handleClick }) {
  const classes = useStyles();

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
      <Grid container className={classes.searchContainer}>
        <FindMovie handleSearch={handleSearch} />
      </Grid>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};
