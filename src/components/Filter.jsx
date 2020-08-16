import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    '& Button': {
      marginRight: theme.spacing(4),
      border: 'none',
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
      '&:hover': {
        backgroundColor: 'inherit'
      },
      '&.selectedFilter': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        marginBottom: '-2px'
      }
    }
  }
}));

function Filter() {
  const classes = useStyles();
  return (
    <ButtonGroup className={classes.buttonGroup} size="large" aria-label="large button group">
      <Button className="selectedFilter">All</Button>
      <Button>DOCUMENTARY</Button>
      <Button>COMEDY</Button>
      <Button>HORROR</Button>
      <Button>CRIME</Button>
    </ButtonGroup>
  );
}

export default Filter;
