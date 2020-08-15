import React from 'react';
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
    top: 5
  }
});

function Sort() {
  const classes = useStyles();
  return (
    <div className={classes.sortByGroup}>
      <Typography variant="body1" className={classes.sortBy}>
        SORT BY
      </Typography>
      <FormControl>
        <Select disableUnderline value={1} className={classes.select} displayEmpty>
          <MenuItem value={1}>RELEASE DATE</MenuItem>
          <MenuItem value={2}>TITLE</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sort;
