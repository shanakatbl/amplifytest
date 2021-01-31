import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(date, name, type, link) {
    return { date, name, type, link};
}

const rows = [
    createData('2020.05.02 20:04:21', 'Invoice', 'type 01', 'www.link.com'),
    createData('2020.12.02 20:04:21', 'BOQ', 'type 01A', 'www.link.com'),
    createData('2020.05.02 20:05:21', 'Bill of Materials', 'type 05B', 'https://www.youtube.com/watch?v=rontrE6thEo&ab_channel=AmazonWebServices')
];

export default function Results() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                <caption>Please click the corresponding link to download the extracted data into .csv file</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">File Name</TableCell>
                        <TableCell align="right">Template Type</TableCell>
                        <TableCell align="right">Download Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.date}>
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right"><a href={row.link}>{row.link}</a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}