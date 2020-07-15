import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PageviewIcon from '@material-ui/icons/Pageview';
import Link from '@material-ui/core/Link';

import UserContext from '../../utils/UserContext'


// const { role } = useContext(UserContext);

export const firstListItems = (
  <div>
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
    <Link href="/create-operatorVehicle">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Create Operator Vehicle" />
    </ListItem>
    </Link>
    <Link href="/create-technicianVehicle">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Create Technician Vehicle" />
    </ListItem>
    </Link>
  </div>
);

export const secondListItems = (
  <div>
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

export const thirdListItems = (
  <div>
    <Link href="/display-operator">
    <ListItem button>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="Display Operator" />
    </ListItem>
    </Link>
    <Link href="/display-operatorVehicles">
    <ListItem button>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="Display Operator Vehicles" />
    </ListItem>
    </Link>
    <Link href="/display-technicians">
    <ListItem button>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="Display Technician" />
    </ListItem>
    </Link>
    <Link href="/display-technicianVehiclese">
    <ListItem button>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="Display Technician Vehicle" />
    </ListItem>
    </Link>
  </div>
);