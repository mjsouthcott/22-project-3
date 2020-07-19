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
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";
import automotiveSystems from "../../utils/automotiveSystems";
import automotiveSubsystemStatuses from "../../utils/automotiveSubsystemStatuses";
import repairPartUnits from "../../utils/repairPartUnits";
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

  const RepairWorkOrderFormSchema = Yup.object().shape({
    automotiveSystems: Yup.array().of(
      // Automotive systems
      Yup.object().shape({
        subsystems: Yup.array().of(
          // Automotive subsystems
          Yup.object().shape({
            status: Yup.string().required("Required"),
            maintenanceActions: Yup.mixed().when("status", {
              is: "M",
              then: Yup.array().of(
                // Maintenance actions
                Yup.object().shape({
                  actionTaken: Yup.string().required("Required"),
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
          <Formik
            initialValues={{ automotiveSystems }}
            validationSchema={RepairWorkOrderFormSchema}
            onSubmit={(values) => {
              const repairWorkOrder = values;

              console.log(repairWorkOrder);

              // TODO: Add API call to save repair work order

              // TODO: Add redirect to display repair request page
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                {automotiveSystems.map((system, index1) => (
                  <div key={system.serial}>
                    {/* System heading */}
                    <Typography variant="h5" className={classes.typography}>
                      {system.serial}. {system.description}
                    </Typography>
                    {system.subsystems.map((subsystem, index2) => (
                      <div key={subsystem.serial}>
                        {/* Subsystem heading */}
                        <Typography variant="h6" className={classes.typography}>
                          {subsystem.serial.slice(subsystem.serial.length - 1)}.{" "}
                          {subsystem.description}
                        </Typography>
                        {/* Subsystem status TextField */}
                        <FormGroup className={classes.formGroup}>
                          <Field
                            name={`automotiveSystems.${index1}.subsystems.${index2}.status`}
                            as={TextField}
                            select
                            label="Status"
                          >
                            {automotiveSubsystemStatuses.map((status) => (
                              <MenuItem key={status.code} value={status.code}>
                                {status.code}
                              </MenuItem>
                            ))}
                          </Field>
                          {/* {errors.automotiveSystems[index1].subsystems[index2].status && touched.automotiveSystems[index1].subsystems[index2].status ? ( */}
                          <span className={classes.errorMessage}>
                            <ErrorMessage
                              name={`automotiveSystems.${index1}.subsystems.${index2}.status`}
                            />
                          </span>
                          {/* ) : null} */}
                        </FormGroup>
                        {/* Subsystem recommended action TextField */}
                        {values.automotiveSystems[index1].subsystems[index2]
                          .status === "M" && (
                          <div>
                            <FormGroup className={classes.formGroup}>
                              <Field
                                name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].actionTaken`}
                                as={TextField}
                                label="Action Taken"
                              />
                              {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                              <span className={classes.errorMessage}>
                                <ErrorMessage
                                  name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].actionTaken`}
                                />
                              </span>
                              {/* ) : null} */}
                            </FormGroup>
                            <FormGroup className={classes.formGroup}>
                              <Field
                                name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].repairParts[0].type`}
                                as={TextField}
                                label="Repair Part"
                              />
                              {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                              <span className={classes.errorMessage}>
                                <ErrorMessage
                                  name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].repairParts[0].type`}
                                />
                              </span>
                              {/* ) : null} */}
                            </FormGroup>
                            <FormGroup className={classes.formGroup}>
                              <Field
                                name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].repairParts[0].quantity`}
                                as={TextField}
                                label="Quantity"
                              />
                              {/* {errors.automotiveSystems[index1].subsystems[index2].recommendedAction && touched.automotiveSystems[index1].subsystems[index2].recommendedAction ? ( */}
                              <span className={classes.errorMessage}>
                                <ErrorMessage
                                  name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].repairParts[0].quantity`}
                                />
                              </span>
                              {/* ) : null} */}
                            </FormGroup>
                            <FormGroup className={classes.formGroup}>
                              <Field
                                name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].repairParts[0].unit`}
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
                                  name={`automotiveSystems.${index1}.subsystems.${index2}.maintenanceActions[0].repairParts[0].unit`}
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
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RepairWorkOrderForm;
