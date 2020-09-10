import React from 'react';
import Container from '@material-ui/core/Container';
import Logo from '../../components/Logo';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.footer} maxWidth="lg">
      <Logo />
    </Container>
  );
}

export default Footer;
