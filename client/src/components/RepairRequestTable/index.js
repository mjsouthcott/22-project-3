import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  typography: {
    marginBottom: 15,
  },
});

function RepairRequestTable(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            Display Repair Requests
          </Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell align="right">Vehicle Call Sign</TableCell>
                  <TableCell align="right">Vehicle Type</TableCell>
                  <TableCell align="right">Estimated Condition Class</TableCell>
                  <TableCell align="right">Vehicle Can Be Moved By</TableCell>
                  <TableCell align="right">Local Tactical Situation</TableCell>
                  <TableCell align="right">
                    Crew Remained With Vehicle
                  </TableCell>
                  <TableCell align="right">Latitude</TableCell>
                  <TableCell align="right">Longitude</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Technician</TableCell>
                  <TableCell align="right">Repair Work Order</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.vehicles.map((vehicle) => (
                  <TableRow key={vehicle._id}>
                    <TableCell component="th" scope="row">
                      {vehicle.repairRequests[0].number}
                    </TableCell>
                    <TableCell align="right">{vehicle.callSign}</TableCell>
                    <TableCell align="right">{vehicle.type}</TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].estimatedConditionClass}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].vehicleCanBeMovedBy}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].localTacticalSituation}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].crewRemainedWithVehicle}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].latitude}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].longitude}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].status}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].assignedTo}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequest[0].repairWorkOrder[0]._id}
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

export default RepairRequestTable;
