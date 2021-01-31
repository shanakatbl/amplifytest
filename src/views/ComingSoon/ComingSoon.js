import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(100),
    },
  },
  content: {
    padding: theme.spacing(40),
    textAlign: "center",
  }
}));

const ComingSoon = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h4" color='textSecondary'>
          Coming soon
        </Typography>
        <Typography variant="h5" color='textSecondary'>
          {props.component}
        </Typography>
        <Typography variant="h7" color='textSecondary'>
          Stay tuned
        </Typography>
      </div>
    </Paper>
  );
}

export default ComingSoon;