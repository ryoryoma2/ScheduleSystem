import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 500,
    },
}));

function createData(homework, range, image) {
    return { homework, range , image};
}

const rows = [
    createData('数学', 'p92-p95','https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'),
    createData('国語', 'p92-p95'),
    createData('理科', 'p92-p95'),
    createData('社会', 'p92-p95'),
    createData('英語', 'p92-p95'),
];

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="studentIDSerach" label="生徒ID" />
            <Button variant="contained" color="primary">検索</Button>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">科目</TableCell>
                            <TableCell align="center">範囲</TableCell>
                            <TableCell align="center">提出物</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.homework}>
                                <TableCell component="th" scope="row" align="center">
                                    {row.homework}
                                </TableCell>
                                <TableCell align="center">{row.range}</TableCell>
                                <TableCell align="center">{row.image}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary">TOPに戻る</Button>
        </form>
    );
}