import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Typography color="primary" variant="h5" className={classes.brand}>
        netflix
      </Typography>
      <Typography color="primary" variant="h6">
        roulette
      </Typography>
    </div>
  );
}

export default Footer;
