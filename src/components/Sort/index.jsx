import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function Sort({ handleSort }) {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState('release_date');
  const sort = e => {
    const { value } = e.target;
    setSortBy(value);
    handleSort(value);
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
          onChange={sort}
        >
          <MenuItem value="release_date">RELEASE DATE</MenuItem>
          <MenuItem value="title">TITLE</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

Sort.propTypes = {
  handleSort: PropTypes.func.isRequired
};

export default Sort;
