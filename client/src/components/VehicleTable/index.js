import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@material-ui/core";
import VehicleAvatar from "../VehicleAvatar/index";
import AssignVehicleOccupantInput from "../AssignVehicleOccupantInput";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  typography: {
    marginBottom: 15,
  },
});

function getVehicleIconBackgroundColor(vehicle) {
  if (vehicle.repairRequests.length) {
    if (vehicle.repairRequests.slice(-1)[0].status === "Open") return "red";
    else if (vehicle.repairRequests.slice(-1)[0].status === "Work In Progress")
      return "gold";
  }
  return "green";
}

function VehicleTable(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            {props.pageTitle}
          </Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Icon</TableCell>
                  <TableCell align="right">Call Sign</TableCell>
                  <TableCell align="right">Registration Number</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Occupant</TableCell>
                  <TableCell align="right">Serviceable</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.vehicles.map((vehicle) => (
                  <TableRow key={vehicle._id}>
                    <TableCell component="th" scope="row">
                      <VehicleAvatar
                        icon={vehicle.iconSrc}
                        alt={vehicle.type}
                        backgroundColor={getVehicleIconBackgroundColor(vehicle)}
                        imageWidth={80}
                      />
                    </TableCell>
                    <TableCell align="right">{vehicle.callSign}</TableCell>
                    <TableCell align="right">
                      {vehicle.registrationNumber}
                    </TableCell>
                    <TableCell align="right">{vehicle.type}</TableCell>
                    <TableCell align="right">
                      {vehicle.occupant ? (
                        `${vehicle.occupant.rank} ${vehicle.occupant.firstName} ${vehicle.occupant.lastName}`
                      ) : (
                        <AssignVehicleOccupantInput
                          dismountedUsers={props.dismountedUsers}
                          vehicle={vehicle}
                          updateOperatorVehicles={props.updateOperatorVehicles}
                          updateDismountedOperators={
                            props.updateDismountedOperators
                          }
                        />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.serviceable ? (
                        <Chip
                          label="Yes"
                          style={{ color: "white", backgroundColor: "green" }}
                        />
                      ) : (
                        <Chip
                          label="No"
                          style={{ color: "white", backgroundColor: "red" }}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

export default VehicleTable;
