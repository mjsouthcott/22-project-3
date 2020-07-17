import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: 250,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Request Open', <div style={{backgroundColor: "red"}}>. </div>),
  createData('Request In Progress', <div style={{backgroundColor: "yellow"}}>. </div>),
  createData('Request Finished', <div style={{backgroundColor: "green"}}>. </div>)
];

export default function LegendTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 800}}>Ticket Status</TableCell>
            <TableCell align="right" style={{fontWeight: 800}}>Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
