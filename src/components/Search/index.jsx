import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import useStyles from './styles';

export default function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const router = useRouter();

  const search = () => {
    router.push(`/movies?query=${query}`, `/movies/${query}`);
    setQuery('');
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      search();
    }
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
            fullWidth
            id="standard-basic"
            label="What do you want to watch?"
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
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
