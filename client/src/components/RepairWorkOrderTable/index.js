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
                    <TableCell align="right">Automotive Sub-System</TableCell>
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
                      <TableRow key={repairRequest.repairWorkOrder._id}>
                        <TableCell
                          component="th"
                          scope="row"
                          // Get rowSpan
                          rowSpan={
                            repairRequest.systems.length *
                            repairRequest.systems.subsystems.length *
                            repairRequest.systems.subsystems.maintenanceActions
                              .length
                          }
                        >
                          {repairRequest.number}
                        </TableCell>
                      </TableRow>
                      {/* Automotive Systems */}
                      {repairRequest.repairWorkOrder.systems.map((system) => (
                        <Fragment>
                          <TableRow key={system.serial}>
                            <TableCell
                              align="right"
                              // Get rowSpan
                              rowSpan={system.subsystems.length}
                            >
                              {system.description}
                            </TableCell>
                          </TableRow>
                          {/* Automotive Sub-Systems */}
                          {system.subsystems.map((subsystem) => (
                            <Fragment>
                              <TableRow key={subsystem.serial}>
                                <TableCell align="right">
                                  {subsystem.description}
                                </TableCell>
                                <TableCell align="right">
                                  {subsystem.status}
                                </TableCell>
                              </TableRow>
                            </Fragment>
                          ))}
                        </Fragment>
                      ))}

                      {/* Statuses */}
                      {/* Maintenance Actions Taken */}
                      {/* Labour Hours */}
                      {/* Repair Parts */}
                      {/* Quantities */}
                      {/* Units */}
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
