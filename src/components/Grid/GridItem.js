import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: "0 15px !important"
    },
    paper: {
        padding: theme.spacing(2),
        //textAlign: 'left',
        //color: theme.palette.text.standard,
    },
    title: {
        fontSize: 20,
        padding: theme.spacing(2)
    }
}));

const GridItem = (props) => {
    const classes = useStyles();
    const { children, title, ...rest } = props;

    return (
        <Grid item {...rest} className={classes.grid}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        <strong>{title}</strong>
                    </Typography>
                    {children}
                </CardContent>
            </Card>
        </Grid>
    );
}

// GridItem.propTypes = {
//     children: PropTypes.node
//     //childrens must be a node (Paper)
// };

export default GridItem;