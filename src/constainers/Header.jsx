import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../components/Logo';
import FindMovie from '../components/FindMovie';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    backgroundColor: theme.palette.info.main,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(18),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7)
  },
  searchContainer: {
    marginTop: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7)
  }
}));

function Header() {
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
        >
          ADD MOVIE
        </Button>
      </Grid>
      <Grid container className={classes.searchContainer}>
        <FindMovie />
      </Grid>
    </Container>
  );
}

export default Header;
