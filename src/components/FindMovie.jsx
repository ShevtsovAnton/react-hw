import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  searchGroup: {
    marginTop: theme.spacing(2)
  }
}));

export default function FindMovie({ handleSearch }) {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const search = () => {
    handleSearch(query);
    setQuery('');
  };

  return (
    <>
      <Typography variant="h4">FIND YOUR MOVIE</Typography>
      <Grid
        container
        spacing={3}
        justify="space-between"
        alignItems="flex-end"
        className={classes.searchGroup}
      >
        <Grid item xs={9}>
          <TextField
            value={query}
            onChange={e => setQuery(e.target.value)}
            fullWidth
            id="standard-basic"
            label="What do you want to watch?"
          />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={search} variant="contained" color="primary" size="large" fullWidth>
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

FindMovie.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
