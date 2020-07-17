import React, { useContext } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PageviewIcon from "@material-ui/icons/Pageview";
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";

import UserContext from "../../utils/UserContext";

// const { role } = useContext(UserContext);

export const firstListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="View Dashboard" />
      </ListItem>
    </Link>
    <Link to="/create-user">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create User" />
      </ListItem>
    </Link>
    <Link to="/create-vehicle">
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
    <Link to="/create-repairRequest">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="New Repair Request" />
      </ListItem>
    </Link>
    <Link to="/create-repairWorkorder">
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
    <Link to="/display-users">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display User" />
      </ListItem>
    </Link>
    <Link to="/display-vehicles">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Vehicles" />
      </ListItem>
    </Link>
    <Link to="/display-repairRequests">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Repair Requests" />
      </ListItem>
    </Link>
    <Link to="/display-repairWorkorders">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Repair Workorders" />
      </ListItem>
    </Link>
  </div>
);
