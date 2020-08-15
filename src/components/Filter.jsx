import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonGroup: {
    '& Button': {
      marginRight: 30,
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
      '&:hover': {
        backgroundColor: 'inherit'
      }
    }
  },
  filter: {
    marginRight: 5,
    border: 'none',
    paddingLeft: 0,
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  selectedFilter: {
    borderBottom: '2px solid #F65261',
    marginBottom: '-2px'
  }
});

function Filter() {
  const classes = useStyles();
  return (
    <ButtonGroup className={classes.buttonGroup} size="large" aria-label="large button group">
      <Button className={clsx(classes.filter, classes.selectedFilter)}>All</Button>
      <Button className={classes.filter}>DOCUMENTARY</Button>
      <Button className={classes.filter}>COMEDY</Button>
      <Button className={classes.filter}>HORROR</Button>
      <Button className={classes.filter}>CRIME</Button>
    </ButtonGroup>
  );
}

export default Filter;
