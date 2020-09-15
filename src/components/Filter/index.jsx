import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

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
