import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from '@material-ui/core/Link';
// import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    {/* <Router> */}
    <Link href="/">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="View Dashboard" />
    </ListItem>
    </Link>
    <Link href="/create-operator">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Create Operator" />
    </ListItem>
    </Link>
    <Link href="/create-technician">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Create Technician" />
    </ListItem>
    </Link>
    {/* </Router> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Requests</ListSubheader>
    <Link href="/repair-request">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="New Repair Request" />
    </ListItem>
    </Link>
    <Link href="/repair-workorder">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="New Repair Work Order" />
    </ListItem>
    </Link>
    <Link href="/create-operatorVehicle">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="New Operator Vehicle" />
    </ListItem>
    </Link>
    <Link href="/create-technicianVehicle">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="New Technician Vehicle" />
    </ListItem>
    </Link>
  </div>
);