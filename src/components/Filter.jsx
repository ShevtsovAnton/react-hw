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

function Filter({ handleFilter }) {
  const classes = useStyles();
  const [activeFilter, setActiveFilter] = useState('all');
  const filter = e => {
    const filterValue = e.currentTarget.value;
    setActiveFilter(filterValue);
    handleFilter(filterValue);
  };
  return (
    <ButtonGroup className={classes.buttonGroup} size="large">
      {filters.map(filterItem => (
        <Button
          key={filterItem}
          value={filterItem}
          className={activeFilter === filterItem ? 'selectedFilter' : ''}
          onClick={filter}
        >
          {filterItem.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default Filter;

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired
};
