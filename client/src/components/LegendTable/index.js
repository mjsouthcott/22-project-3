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
  createData('Open', <div style={{height: "25px", width: "50px",backgroundColor: "red"}}/>),
  createData('In Progress', <div style={{height: "25px", width: "50px",backgroundColor: "gold"}}/>),
  createData('Complete', <div style={{height: "25px", width: "50px",backgroundColor: "green"}}/>),
  createData('Mobile Workshop', <div style={{height: "25px", width: "25px", backgroundColor: "blue"}}/>),
  createData('Situation: Safe', <div style={{height: "25px", width: "25px", backgroundColor: "#555", borderRadius: "50px"}}/>),
  createData('Situation: Hostile', <div style={{height: "0", width: "0", borderLeft: '13px solid transparent', borderRight: '13px solid transparent', borderBottom: '26px solid #555'}}/>)
];

export default function LegendTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 800}}>Repair Request Status</TableCell>
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
