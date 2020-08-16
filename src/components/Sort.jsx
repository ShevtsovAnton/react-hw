import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  sortByGroup: {
    display: 'flex'
  },
  sortBy: {
    alignSelf: 'center',
    marginRight: 20
  },
  select: {
    position: 'relative',
    top: 5,
    minWidth: 140,
    textAlign: 'center'
  }
});

function Sort({ handleSortEvent }) {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState('releaseDate');
  const handleSortChange = e => {
    const { value } = e.target;
    setSortBy(value);
    handleSortEvent(value);
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
          onChange={handleSortChange}
        >
          <MenuItem value="releaseDate">RELEASE DATE</MenuItem>
          <MenuItem value="title">TITLE</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

Sort.propTypes = {
  handleSortEvent: PropTypes.func.isRequired
};

export default Sort;
