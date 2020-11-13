import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import useStyles from './styles';

export default function NotFound() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div>Page Not Found</div>
        <Link href="/">
          <Button variant="contained">Go Back To Home</Button>
        </Link>
      </div>
    </>
  );
}
