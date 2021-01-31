import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormUpload from '../Cards/FormUpload'

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

function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>Number of Documents Converted: 65</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>Total Amount: $125.00</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>Number of Pending Documents: 03</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        Upload an Image file to Extract Data
                        <FormUpload />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default AutoGrid;