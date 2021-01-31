import React from 'react';
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    grid: {
        //margin: "0 -15px !important",
        margin: "20px 5px",
        width: "unset",
    }
}));

const GridContainer = (props) => {
    const classes = useStyles();
    const { children, ...rest } = props;

    return (
        <div className={classes.root}>
            <Grid container {...rest} className={classes.grid}>
                {children}
            </Grid>
        </div>
    );
}

GridContainer.propTypes = {
    children: PropTypes.node
    //childrens must be a node (GridItem)
};

export default GridContainer;