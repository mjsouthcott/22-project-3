import React, { useState, useEffect } from "react";
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
import { Alert } from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";
import { Formik, Form, Field, ErrorMessage } from "formik";
import API from "../../utils/API";
import * as Yup from "yup";
import "./style.css";

function RepairRequestForm(props) {
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentLocation({
        latitude: pos.coords.latitude.toFixed(7),
        longitude: pos.coords.longitude.toFixed(7),
      });
    });
  }, []);

  const vehicleConditionClasses = [
    "Beyond Repair",
    "Close Support",
    "Depot",
    "General Support",
    "Integral",
    "Unknown",
  ];

  const vehicleMovementOptions = ["Drivable", "Straight Pull", "Suspended Tow"];

  const tacticalSituationStatuses = ["Safe", "Hostile"];

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

  const RepairRequestFormSchema = Yup.object().shape({
    description: Yup.string()
      .min(2, "Minimum 2 letters")
      .max(30, "Maximum 30 letters")
      .required("Required"),
    estimatedConditionClass: Yup.string().required("Required"),
    vehicleCanBeMovedBy: Yup.string().required("Required"),
    localTacticalSituation: Yup.string().required("Required"),
    crewRemainedWithVehicle: Yup.boolean().required("Required"),
  });

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            Create Repair Request
          </Typography>
          {props.user.mounted === false ? (
            <Typography
              variant="h6"
              className={classes.typography}
              style={{ marginBottom: 0 }}
            >
              You're currently dismounted. To create a Repair Request, your
              Operations Manager must first assign you to a vehicle.
            </Typography>
          ) : (
            <Formik
              initialValues={{
                description: "",
                estimatedConditionClass: "",
                vehicleCanBeMovedBy: "",
                localTacticalSituation: "",
                crewRemainedWithVehicle: "",
              }}
              validationSchema={RepairRequestFormSchema}
              onSubmit={(values, { resetForm }) => {
                const repairRequest = {
                  description: values.description,
                  estimatedConditionClass: values.estimatedConditionClass,
                  vehicleCanBeMovedBy: values.vehicleCanBeMovedBy,
                  localTacticalSituation: values.localTacticalSituation,
                  crewRemainedWithVehicle: values.crewRemainedWithVehicle,
                  location: currentLocation,
                };
                API.saveRepairRequest(repairRequest)
                  .then((res) => {
                    let repairRequestIdArray = [];
                    if (props.vehicle.repairRequests) {
                      repairRequestIdArray = props.vehicle.repairRequests.map(
                        (repairRequest) => repairRequest._id
                      );
                    }
                    API.updateVehicleRepairRequests(props.vehicle._id, [
                      ...repairRequestIdArray,
                      res.data._id,
                    ]);
                  })
                  .then(() =>
                    API.updateVehicleServiceableStatus(props.vehicle._id, false)
                  );

                // Show alert with form submission feedback
                handleClick();

                // Reset form
                resetForm();
              }}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      name="description"
                      as={TextField}
                      label="Description"
                    />
                    {errors.description && touched.description ? (
                      <span className={classes.errorMessage}>
                        <ErrorMessage name="description" />
                      </span>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      name="estimatedConditionClass"
                      as={TextField}
                      select
                      label="Estimated Condition Class"
                    >
                      {vehicleConditionClasses.map((conditionClass) => (
                        <MenuItem key={conditionClass} value={conditionClass}>
                          {conditionClass}
                        </MenuItem>
                      ))}
                    </Field>
                    {errors.estimatedConditionClass &&
                    touched.estimatedConditionClass ? (
                      <span className={classes.errorMessage}>
                        <ErrorMessage name="estimatedConditionClass" />
                      </span>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      name="vehicleCanBeMovedBy"
                      as={TextField}
                      select
                      label="Vehicle Can Be Moved By"
                    >
                      {vehicleMovementOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Field>
                    {errors.vehicleCanBeMovedBy &&
                    touched.vehicleCanBeMovedBy ? (
                      <span className={classes.errorMessage}>
                        <ErrorMessage name="vehicleCanBeMovedBy" />
                      </span>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      name="localTacticalSituation"
                      as={TextField}
                      select
                      label="Local Tactical Situation"
                    >
                      {tacticalSituationStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                    {errors.localTacticalSituation &&
                    touched.localTacticalSituation ? (
                      <span className={classes.errorMessage}>
                        <ErrorMessage name="localTacticalSituation" />
                      </span>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      name="crewRemainedWithVehicle"
                      as={TextField}
                      select
                      label="Crew Remained With Vehicle"
                    >
                      <MenuItem key="Yes" value={true}>
                        Yes
                      </MenuItem>
                      <MenuItem key="No" value={false}>
                        No
                      </MenuItem>
                    </Field>
                    {errors.crewRemainedWithVehicle &&
                    touched.crewRemainedWithVehicle ? (
                      <span className={classes.errorMessage}>
                        <ErrorMessage name="crewRemainedWithVehicle" />
                      </span>
                    ) : null}
                  </FormGroup>
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
          Repair Request created
        </Alert>
      )}
    </Container>
  );
}

export default RepairRequestForm;
