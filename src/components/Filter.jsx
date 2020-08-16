import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const filters = ['all', 'documentary', 'comedy', 'horror', 'crime'];

function Filter({ handleFilterEvent }) {
  const classes = useStyles();
  const [activeFilter, setActiveFilter] = useState('all');
  const handleFilterChange = e => {
    const filter = e.currentTarget.value;
    setActiveFilter(filter);
    handleFilterEvent(filter);
  };
  return (
    <ButtonGroup className={classes.buttonGroup} size="large">
      {filters.map(filter => (
        <Button
          key={filter}
          value={filter}
          className={activeFilter === filter ? 'selectedFilter' : ''}
          onClick={handleFilterChange}
        >
          {filter.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default Filter;

Filter.propTypes = {
  handleFilterEvent: PropTypes.func.isRequired
};
