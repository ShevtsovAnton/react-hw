import React from 'react';
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

export default function FindMovie() {
  const classes = useStyles();
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
          <TextField fullWidth id="standard-basic" label="What do you want to watch?" />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" size="large" fullWidth>
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </>
  );
}