import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';

import LineCharts from '../LineCharts';
import BarCharts from '../BarCharts';
import BarChartsTacticalSituation from '../BarChartsTacticalSituation'
import PieCharts from '../PieCharts';
import {WebMapView} from '../WebMapView'
import LegendTable from '../LegendTable'

const useStyles = makeStyles((theme) => ({
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 250,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      {/* Line Chart */}
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper}>
          <BarChartsTacticalSituation />
        </Paper>
      </Grid>
      {/* Bar Charts */}
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper}>
          <BarCharts/>
        </Paper>
      </Grid>
      {/* Bar Charts */}
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper}>
          <PieCharts/>
        </Paper>
      </Grid>
      {/* Maps */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper style={{height: "500px"}}>
        <LegendTable/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9} style={{height: "500px"}}>
        <WebMapView/>
      </Grid>
    </Grid>
  );
}


