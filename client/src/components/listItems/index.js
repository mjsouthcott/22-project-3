import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
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
    <Link href="/create-user">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Create User" />
    </ListItem>
    </Link>
    <Link href="/create-vehicle">
    <ListItem button>
      <ListItemIcon>
        <AirportShuttleIcon />
      </ListItemIcon>
      <ListItemText primary="Create Vehicle" />
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
  </div>
);

export const thirdListItems = (
  <div>
    <Link href="/display-users">
    <ListItem button>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="Display User" />
    </ListItem>
    </Link>
    <Link href="/display-vehicles">
    <ListItem button>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="Display Vehicles" />
    </ListItem>
    </Link>
  </div>
);