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
                  {/* <TableCell align="right">Latitude</TableCell>
                  <TableCell align="right">Longitude</TableCell> */}
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Technician</TableCell>
                  <TableCell align="right">Repair Work Order</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.vehicles.map((vehicle) => (
                  <TableRow key={vehicle._id}>
                    <TableCell component="th" scope="row">
                      {vehicle.repairRequests[0]
                        ? vehicle.repairRequests[0].number
                        : null}
                    </TableCell>
                    <TableCell align="right">{vehicle.callSign}</TableCell>
                    <TableCell align="right">{vehicle.type}</TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequests[0]
                        ? vehicle.repairRequests[0].estimatedConditionClass
                        : null}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequests[0]
                        ? vehicle.repairRequests[0].vehicleCanBeMovedBy
                        : null}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequests[0]
                        ? vehicle.repairRequests[0].localTacticalSituation
                        : null}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequests[0] &&
                      vehicle.repairRequests[0].crewRemainedWithVehicle
                        ? "Yes"
                        : "No"}
                    </TableCell>
                    {/* <TableCell align="right">
                      {vehicle.repairRequests[0]
                        ? vehicle.repairRequests[0].location.latitude
                        : null}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequests[0]
                        ? vehicle.repairRequests[0].location.longitude
                        : null}
                    </TableCell> */}
                    <TableCell align="right">
                      {vehicle.repairRequests[0]
                        ? vehicle.repairRequests[0].status
                        : null}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequests[0] &&
                      vehicle.repairRequests[0].assignedTo
                        ? "Assigned"
                        : // ? `${vehicle.repairRequests[0].assignedTo.rank} ${vehicle.repairRequests[0].assignedTo.firstName} ${vehicle.repairRequests[0].assignedTo.lastName}`
                          "Not Assigned"}
                    </TableCell>
                    <TableCell align="right">
                      {vehicle.repairRequests[0] &&
                      vehicle.repairRequests[0].repairWorkOrder
                        ? vehicle.repairRequests[0].repairWorkOrder._id
                        : null}
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
