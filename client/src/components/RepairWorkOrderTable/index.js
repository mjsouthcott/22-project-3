import React, { Fragment } from "react";
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

function getRepairRequestRowSpan(repairRequest) {
  let count = 0;
  repairRequest.repairWorkOrder.automotiveSystems.forEach((system) => {
    system.automotiveSubsystems.forEach((subsystem) => {
      subsystem.maintenanceActions.forEach((maintenanceAction) => {
        maintenanceAction.repairParts.forEach((repairPart) => {});
      });
    });
  });
  console.log(count);
  return count;
}

function getSystemRowSpan(system) {
  let count = 0;
  system.automotiveSubsystems.forEach((subsystem) => {
    subsystem.maintenanceActions.forEach((maintenanceAction) => {
      maintenanceAction.repairParts.forEach((repairPart) => {});
    });
  });
  return count;
}

function getSubsystemRowSpan(subsystem) {
  let count = 0;
  subsystem.maintenanceActions.forEach((maintenanceAction) => {
    maintenanceAction.repairParts.forEach((repairPart) => {
      count++;
    });
  });
  return count;
}

function getMaintenanceActionRowSpan(maintenanceAction) {
  let count = 0;
  maintenanceAction.repairParts.forEach((repairPart) => {
    count++;
  });

  return count;
}

function RepairWorkOrderTable(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            Display Repair Work Orders
          </Typography>
          {props.repairRequests.length === 0 ? (
            <Typography
              variant="h6"
              className={classes.typography}
              style={{ marginBottom: 0 }}
            >
              No Repair Work Orders to display.
            </Typography>
          ) : (
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Repair Request Number</TableCell>
                    <TableCell align="right">Automotive System</TableCell>
                    <TableCell align="right">Automotive Subsystem</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">
                      Maintenance Action Taken
                    </TableCell>
                    <TableCell align="right">Labour Hours</TableCell>
                    <TableCell align="right">Repair Part</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Unit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.repairRequests.map((repairRequest) => (
                    <Fragment>
                      <TableRow>
                        <TableCell rowSpan={29}>
                          {repairRequest.number}
                        </TableCell>
                      </TableRow>
                      {repairRequest.repairWorkOrder.automotiveSystems.map(
                        (system) => (
                          <Fragment>
                            <TableRow>
                              <TableCell rowSpan={4}>
                                {system.description}
                              </TableCell>
                            </TableRow>
                            {system.automotiveSubsystems.map((subsystem) => (
                              <Fragment>
                                <TableRow>
                                  <TableCell rowSpan={1}>
                                    {subsystem.description}
                                  </TableCell>
                                  <TableCell rowSpan={1}>
                                    {subsystem.status}
                                  </TableCell>
                                  <TableCell rowSpan={1}>
                                    {subsystem.maintenanceActions[0]
                                      ? subsystem.maintenanceActions[0]
                                          .actionTaken
                                      : "N/A"}
                                  </TableCell>
                                  <TableCell rowSpan={1}>
                                    {subsystem.maintenanceActions[0]
                                      ? subsystem.maintenanceActions[0]
                                          .labourHours
                                      : "N/A"}
                                  </TableCell>
                                  <TableCell rowSpan={1}>
                                    {subsystem.maintenanceActions[0]
                                      ? subsystem.maintenanceActions[0]
                                          .repairParts[0].type
                                      : "N/A"}
                                  </TableCell>
                                  <TableCell rowSpan={1}>
                                    {subsystem.maintenanceActions[0]
                                      ? subsystem.maintenanceActions[0]
                                          .repairParts[0].quantity
                                      : "N/A"}
                                  </TableCell>
                                  <TableCell rowSpan={1}>
                                    {subsystem.maintenanceActions[0]
                                      ? subsystem.maintenanceActions[0]
                                          .repairParts[0].unit
                                      : "N/A"}
                                  </TableCell>
                                </TableRow>
                              </Fragment>
                            ))}
                          </Fragment>
                        )
                      )}
                    </Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default RepairWorkOrderTable;
