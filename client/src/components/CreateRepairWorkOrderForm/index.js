import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
  Container,
  Divider,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";
import automotiveSystems from "../../utils/automotiveSystems";
import automotiveSubsystemStatuses from "../../utils/automotiveSubsystemStatuses";
import repairPartUnits from "../../utils/repairPartUnits";
import API from "../../utils/API";
var to = require("to-case");

function RepairWorkOrderForm(props) {
  const useStyles = makeStyles({
    typography: {
      marginBottom: 15,
    },
    formGroup: {
      marginBottom: 15,
    },
    errorMessage: {
      color: "red",
    },
  });
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 1500);
  };

  const RepairWorkOrderFormSchema = Yup.object().shape({
    repairRequest: Yup.string().required("Required"),
    automotiveSystems: Yup.array().of(
      // Automotive systems
      Yup.object().shape({
        automotiveSubsystems: Yup.array().of(
          // Automotive subsystems
          Yup.object().shape({
            status: Yup.string().required("Required"),
            maintenanceActions: Yup.mixed().when("status", {
              is: "Maintenance action required",
              then: Yup.array().of(
                // Maintenance actions
                Yup.object().shape({
                  actionTaken: Yup.string().required("Required"),
                  labourHours: Yup.number().required("Required"),
                  repairParts: Yup.array().of(
                    // Repair parts
                    Yup.object().shape({
                      type: Yup.string().required("Required"),
                      quantity: Yup.number()
                        .typeError("Must be a number")
                        .required("Required"),
                      unit: Yup.string().required("Required"),
                    })
                  ),
                })
              ),
            }),
          })
        ),
      })
    ),
  });

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            Create Repair Work Order
          </Typography>
          {props.vehicles.length === 0 ? (
            <Typography
              variant="h6"
              className={classes.typography}
              style={{ marginBottom: 0 }}
            >
              No open Repair Requests.
            </Typography>
          ) : (
            <Formik
              initialValues={{ automotiveSystems }}
              validationSchema={RepairWorkOrderFormSchema}
              onSubmit={(values, { resetForm }) => {
                const { repairRequest, ...repairWorkOrder } = values;
                API.saveRepairWorkOrder(repairWorkOrder)
                  .then((res) => {
                    API.updateRepairRequestRepairWorkOrder(
                      repairRequest,
                      res.data._id
                    );
                  })
                  .then(() => {
                    API.updateRepairRequestStatus(repairRequest, "Complete");
                  })
                  .then(() => {
                    API.updateUserAvailableStatus(props.user._id, true);
                  })
                  .then(() => {
                    let targetVehicle;
                    props.vehicles.forEach((vehicle) => {
                      vehicle.repairRequests.forEach((request) => {
                        if (request._id === repairRequest)
                          targetVehicle = vehicle._id;
                      });
                    });
                    console.log(targetVehicle);
                    API.updateVehicleServiceableStatus(targetVehicle, true);

                    // Show alert with form submission feedback
                    handleClick();

                    // Reset form
                    resetForm();
                  });
              }}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      name="repairRequest"
                      as={TextField}
                      select
                      label="Repair Request"
                    >
                      {props.vehicles.map((vehicle) =>
                        vehicle.repairRequests.map((repairRequest) => (
                          <MenuItem
                            key={repairRequest._id}
                            value={repairRequest._id}
                          >
                            {repairRequest.number}
                          </MenuItem>
                        ))
                      )}
                    </Field>
                    <span className={classes.errorMessage}>
                      <ErrorMessage name={`repairRequest`} />
                    </span>
                  </FormGroup>
                  <Divider style={{ marginBottom: 10 }}></Divider>
                  {automotiveSystems.map((system, index1) => (
                    <div key={system.serial}>
                      {/* System heading */}
                      <Typography variant="h5" className={classes.typography}>
                        {system.serial}. {system.description}
                      </Typography>
                      {system.automotiveSubsystems.map((subsystem, index2) => (
                        <div key={subsystem.serial}>
                          {/* Subsystem heading */}
                          <Typography
                            variant="h6"
                            className={classes.typography}
                          >
                            {subsystem.serial.slice(
                              subsystem.serial.length - 1
                            )}
                            . {subsystem.description}
                          </Typography>
                          {/* Subsystem status TextField */}
                          <FormGroup className={classes.formGroup}>
                            <Field
                              name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.status`}
                              as={TextField}
                              select
                              label="Status"
                            >
                              {automotiveSubsystemStatuses.map((status) => (
                                <MenuItem
                                  key={status.status}
                                  value={status.status}
                                >
                                  {status.status}
                                </MenuItem>
                              ))}
                            </Field>
                            {/* {errors.automotiveSystems[index1].subsystems[index2].status && touched.automotiveSystems[index1].subsystems[index2].status ? ( */}
                            <span className={classes.errorMessage}>
                              <ErrorMessage
                                name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.status`}
                              />
                            </span>
                            {/* ) : null} */}
                          </FormGroup>
                          {/* Subsystem recommended action TextField */}
                          {values.automotiveSystems[index1]
                            .automotiveSubsystems[index2].status ===
                            "Maintenance action required" && (
                            <div>
                              <FormGroup className={classes.formGroup}>
                                <Field
                                  name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].actionTaken`}
                                  as={TextField}
                                  label="Action Taken"
                                />
                                {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                                <span className={classes.errorMessage}>
                                  <ErrorMessage
                                    name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].actionTaken`}
                                  />
                                </span>
                                {/* ) : null} */}
                              </FormGroup>
                              <FormGroup className={classes.formGroup}>
                                <Field
                                  name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].labourHours`}
                                  as={TextField}
                                  label="Labour Hours"
                                />
                                {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                                <span className={classes.errorMessage}>
                                  <ErrorMessage
                                    name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].labourHours`}
                                  />
                                </span>
                                {/* ) : null} */}
                              </FormGroup>
                              <FormGroup className={classes.formGroup}>
                                <Field
                                  name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].repairParts[0].type`}
                                  as={TextField}
                                  label="Repair Part"
                                />
                                {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                                <span className={classes.errorMessage}>
                                  <ErrorMessage
                                    name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].repairParts[0].type`}
                                  />
                                </span>
                                {/* ) : null} */}
                              </FormGroup>
                              <FormGroup className={classes.formGroup}>
                                <Field
                                  name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].repairParts[0].quantity`}
                                  as={TextField}
                                  label="Quantity"
                                />
                                {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                                <span className={classes.errorMessage}>
                                  <ErrorMessage
                                    name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].repairParts[0].quantity`}
                                  />
                                </span>
                                {/* ) : null} */}
                              </FormGroup>
                              <FormGroup className={classes.formGroup}>
                                <Field
                                  name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].repairParts[0].unit`}
                                  as={TextField}
                                  select
                                  label="Unit"
                                >
                                  {repairPartUnits.map((unit) => (
                                    <MenuItem
                                      key={unit.name}
                                      value={unit.abbreviation}
                                    >
                                      {unit.abbreviation}
                                    </MenuItem>
                                  ))}
                                </Field>
                                {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                                <span className={classes.errorMessage}>
                                  <ErrorMessage
                                    name={`automotiveSystems.${index1}.automotiveSubsystems.${index2}.maintenanceActions[0].repairParts[0].unit`}
                                  />
                                </span>
                                {/* ) : null} */}
                              </FormGroup>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                  <Button type="submit">Create</Button>
                  {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                  <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                </Form>
              )}
            </Formik>
          )}
        </CardContent>
      </Card>
      {open && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          variant="filled"
          severity="success"
          hidden={true}
          style={{ marginTop: 20 }}
        >
          Repair Work Order created
        </Alert>
      )}
    </Container>
  );
}

export default RepairWorkOrderForm;
