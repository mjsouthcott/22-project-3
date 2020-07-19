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
  Button,
} from "@material-ui/core";
import AssignTechnicianInput from "../AssignTechnicianInput";

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
          {props.vehicles.length === 0 ? (
            <Typography
              variant="h6"
              className={classes.typography}
              style={{ marginBottom: 0 }}
            >
              No Repair Requests to display.
            </Typography>
          ) : (
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell align="right">Vehicle Call Sign</TableCell>
                    <TableCell align="right">Vehicle Type</TableCell>
                    <TableCell align="right">
                      Estimated Condition Class
                    </TableCell>
                    <TableCell align="right">Vehicle Can Be Moved By</TableCell>
                    <TableCell align="right">
                      Local Tactical Situation
                    </TableCell>
                    <TableCell align="right">
                      Crew Remained With Vehicle
                    </TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Assigned To</TableCell>
                    <TableCell align="right">Repair Work Order</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.vehicles.map((vehicle) =>
                    vehicle.repairRequests.map((repairRequest) => (
                      <TableRow key={repairRequest._id}>
                        <TableCell component="th" scope="row">
                          {repairRequest.number}
                        </TableCell>
                        <TableCell align="right">{vehicle.callSign}</TableCell>
                        <TableCell align="right">{vehicle.type}</TableCell>
                        <TableCell align="right">
                          {repairRequest.estimatedConditionClass}
                        </TableCell>
                        <TableCell align="right">
                          {repairRequest.vehicleCanBeMovedBy}
                        </TableCell>
                        <TableCell align="right">
                          {repairRequest.localTacticalSituation === "Safe" ? (
                            <Chip
                              label="Safe"
                              style={{
                                color: "white",
                                backgroundColor: "green",
                              }}
                            />
                          ) : (
                            <Chip
                              label="Hostile"
                              style={{ color: "white", backgroundColor: "red" }}
                            />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {repairRequest.crewRemainedWithVehicle ? (
                            <Chip
                              label="Yes"
                              style={{
                                color: "white",
                                backgroundColor: "green",
                              }}
                            />
                          ) : (
                            <Chip
                              label="No"
                              style={{ color: "white", backgroundColor: "red" }}
                            />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {repairRequest.status === "Open" ? (
                            <Chip
                              label="Open"
                              style={{ color: "white", backgroundColor: "red" }}
                            />
                          ) : repairRequest.status === "Work In Progress" ? (
                            <Chip
                              label="Work In Progress"
                              style={{
                                color: "black",
                                backgroundColor: "gold",
                              }}
                            />
                          ) : (
                            <Chip
                              label="Complete"
                              style={{
                                color: "white",
                                backgroundColor: "green",
                              }}
                            />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {repairRequest.assignedTo === undefined &&
                          props.user.role === "Operator" ? (
                            "Technician not yet assigned"
                          ) : repairRequest.assignedTo ? (
                            `${repairRequest.assignedTo.rank} ${repairRequest.assignedTo.firstName} ${repairRequest.assignedTo.lastName}`
                          ) : props.availableTechnicians.length === 0 ? (
                            "No available Technicians"
                          ) : (
                            <AssignTechnicianInput
                              repairRequest={repairRequest}
                              availableTechnicians={props.availableTechnicians}
                              updateVehicles={props.updateVehicles}
                              updateAvailableTechnicians={
                                props.updateAvailableTechnicians
                              }
                            />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {repairRequest.repairWorkOrder === undefined &&
                          (props.user.role === "Maintenance Manager" ||
                            props.user.role === "Operator") ? (
                            // <Chip
                            //   label="Not Created"
                            //   style={{ color: "white", backgroundColor: "red" }}
                            // />
                            "Repair Work Order not yet created"
                          ) : repairRequest.repairWorkOrder === undefined &&
                            props.user.role === "Technician" ? (
                            <Button
                              variant="contained"
                              // style={{ color: "white", backgroundColor: "green" }}
                              onClick={() => {
                                console.log(
                                  repairRequest._id,
                                  repairRequest.number
                                );
                              }}
                            >
                              Create
                            </Button>
                          ) : repairRequest.repairWorkOrder.status ===
                            "Open" ? (
                            <Chip
                              label="Open"
                              style={{ color: "white", backgroundColor: "red" }}
                            />
                          ) : repairRequest.repairWorkOrder.status ===
                            "Work In Progress" ? (
                            <Chip
                              label="Work In Progress"
                              style={{
                                color: "black",
                                backgroundColor: "gold",
                              }}
                            />
                          ) : (
                            <Chip
                              label="Complete"
                              style={{
                                color: "white",
                                backgroundColor: "green",
                              }}
                            />
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default RepairRequestTable;
