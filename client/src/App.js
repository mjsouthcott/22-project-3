import React from 'react';
import RepairWorkOrderForm from './components/RepairWorkOrderForm/index'
import RepairRequestForm from './components/RepairRequestForm/index'
import CreateOperator from './pages/CreateOperator'
import CreateTechnician from './pages/CreateTechnician'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
import VehicleAvatar from './components/VehicleAvatar/index'
import Dashboard from './components/Dashboard'
import './App.css';

// import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

// import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './components/listItems';
import Chart from './components/Chart';
import Deposits from './components/Deposits';
// import {WebMapView} from '../WebMapView'


import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  
  const drawerWidth = 240;
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
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
      height: 240,
    },
  }));
  
  // export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
  



  return (
    <>
      {/* <RepairWorkOrderForm /> */}
      {/* <RepairRequestForm /> */}
      {/* <CreateOperator />
      <br></br>
      <CreateTechnician />
      <br></br> */}
      {/* <CreateOperatorVehicle />
      <br></br>
      <CreateTechnicianVehicle /> */}
      {/* <br></br>
      <List>
        <ListItem>
          <ListItemAvatar>
            <VehicleAvatar backgroundColor='red' icon='assets/images/medium-logistic-vehicle-cargo.png' type='Medium Logistic Vehicle' imageWidth={80} />
          </ListItemAvatar>
          <ListItemText>
          </ListItemText>
        </ListItem>
      </List>
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/armoured-engineering-vehicle.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/armoured-patrol-vehicle.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/heavy-logistic-vehicle-refueller.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/heavy-logistic-vehicle-tank-transporter.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/main-battle-tank.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/infantry-fighting-vehicle.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br> */}

    <div >
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Router>
      <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
        </Drawer>
     
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        {/* <Dashboard/> */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/repair-request" component={RepairRequestForm} />
        {/* <Route exact path="/discover"  />
        <Route exact path="/search" /> */}

        </Container>
      </main>
      </div>
      </Router>
      </div>

    </>
  )
}

export default App;
