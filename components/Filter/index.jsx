import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import filterBy from '../store/actions/filter';
import useStyles from './styles';

const filters = ['all', 'family', 'comedy', 'fantasy', 'drama'];

function Filter() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.filterBy);
  const classes = useStyles();
  const filter = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterBy(filterValue));
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
