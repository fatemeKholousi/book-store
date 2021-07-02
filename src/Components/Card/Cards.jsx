import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>


        <Grid item xs={3}>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
