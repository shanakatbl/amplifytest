import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AutoGrid from '../../components/Grid/AutoGrid';
import Results from '../../components/Tables/ExtractedResults/Results'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%'
    }
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <h1>Upload Function and Dashboard</h1>
      <AutoGrid />
      <Results />
    </Paper>
  );
}
