import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

export default function NotFound() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div>Page Not Found</div>
        <Button variant="contained" onClick={() => history.push('/')}>
          Go Back To Home
        </Button>
      </div>
    </>
  );
}
