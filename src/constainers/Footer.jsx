import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../components/Logo';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.footer} maxWidth="lg">
      <Logo />
    </Container>
  );
}

export default Footer;
