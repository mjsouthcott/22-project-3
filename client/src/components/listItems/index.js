import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PageviewIcon from "@material-ui/icons/Pageview";
// import NavLink from '@material-ui/core/NavLink';
import { NavLink } from "react-router-dom";
import "./Style.css";



export const opsManagerListItems = (
  <div>
    <NavLink to="/create-user" >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Operator" />
      </ListItem>
    </NavLink>
    <NavLink to="/create-vehicle">
      <ListItem button>
        <ListItemIcon>
          <AirportShuttleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Operator Vehicle" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-users">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Operators" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-vehicles">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Operator Vehicles" />
      </ListItem>
    </NavLink>
  </div>
);

export const maintenanceManagerListItems = (
  <div>
    <NavLink to="/create-user">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Technician" />
      </ListItem>
    </NavLink>
    <NavLink to="/create-vehicle">
      <ListItem button>
        <ListItemIcon>
          <AirportShuttleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Technician Vehicle" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-users">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Technicians" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-vehicles">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Technician Vehicles" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-repairRequests">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Repair Requests" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-repairWorkorders">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Repair Work Orders" />
      </ListItem>
    </NavLink>
    <NavLink to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Display Dashboard" />
      </ListItem>
    </NavLink>
  </div>
);

export const operatorListItems = (
  <div>
    <NavLink to="/create-repair-request">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Create Repair Request" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-repairRequests">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Repair Requests" />
      </ListItem>
    </NavLink>
  </div>
);

export const technicianListItems = (
  <div>
    <NavLink to="/display-repairRequests">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Repair Requests" />
      </ListItem>
    </NavLink>
    <NavLink to="/display-repairWorkorders">
      <ListItem button>
        <ListItemIcon>
          <PageviewIcon />
        </ListItemIcon>
        <ListItemText primary="Display Repair Work Orders" />
      </ListItem>
    </NavLink>
  </div>
);