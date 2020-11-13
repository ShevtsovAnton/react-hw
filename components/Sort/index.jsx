import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import sort from '../store/actions/sort';

function Sort() {
  const dispatch = useDispatch();
  const sortBy = useSelector(state => state.sortBy);
  const classes = useStyles();
  const sortByValue = e => {
    const { value } = e.target;
    dispatch(sort(value));
  };

  return (
    <div className={classes.sortByGroup}>
      <Typography variant="body1" className={classes.sortBy}>
        SORT BY
      </Typography>
      <FormControl>
        <Select
          disableUnderline
          value={sortBy}
          className={classes.select}
          displayEmpty
          onChange={sortByValue}
        >
          <MenuItem value="release_date">RELEASE DATE</MenuItem>
          <MenuItem value="title">TITLE</MenuItem>
          <MenuItem value="vote_average">RATING</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sort;
