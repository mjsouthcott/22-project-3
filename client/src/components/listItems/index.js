import React, { useContext } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PageviewIcon from "@material-ui/icons/Pageview";
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import "./Style.css";



export const opsManagerListItems = (
  <div>
    <Link to="/create-user">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Operator" />
      </ListItem>
    </Link>
    <Link to="/create-vehicle">
      <ListItem button>
        <ListItemIcon>
          <AirportShuttleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Operator Vehicle" />
      </ListItem>
    </Link>
    <Link to="/display-users">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Operators" />
      </ListItem>
    </Link>
    <Link to="/display-vehicles">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Operator Vehicles" />
      </ListItem>
    </Link>
  </div>
);

export const maintenanceManagerListItems = (
  <div>
    <Link to="/create-user">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Technician" />
      </ListItem>
    </Link>
    <Link to="/create-vehicle">
      <ListItem button>
        <ListItemIcon>
          <AirportShuttleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Technician Vehicle" />
      </ListItem>
    </Link>
    <Link to="/display-users">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Technicians" />
      </ListItem>
    </Link>
    <Link to="/display-vehicles">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Technician Vehicles" />
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
        <ListItemText primary="Display Repair Work Orders" />
      </ListItem>
    </Link>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Display Dashboard" />
      </ListItem>
    </Link>
  </div>
);

export const operatorListItems = (
  <div>
    <Link to="/create-repairRequest">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Create Repair Request" />
      </ListItem>
    </Link>
  </div>
);

export const technicianListItems = (
  <div>
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
        <ListItemText primary="Display Repair Work Orders" />
      </ListItem>
    </Link>
  </div>
);