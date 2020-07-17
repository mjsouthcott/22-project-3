import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormGroup,
  MenuItem,
  TextField,
  Container,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";
import API from "../../utils/API";

function AssignTechnicianInput(props) {
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

  const UserFormSchema = Yup.object().shape({
    technician: Yup.string().required("Required"),
  });

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={{
          repairRequest: props.repairRequest._id,
          technician: "",
        }}
        validationSchema={UserFormSchema}
        onSubmit={(values) => {
          API.updateRepairRequestAssignedTo(
            values.repairRequest,
            values.technician
          )
            .then(() => {
              API.updateUserAvailableStatus(values.technician, false);
            })
            .then(() => {});
          // API.updateVehicleOccupant(values.vehicle, values.occupant)
          //   .then(() => {
          //     API.updateUserDismountedStatus(values.occupant, true);
          //   })
          //   .then(() => {
          //     const targetUser = props.dismountedUsers.find((user) => {
          //       return user._id === values.occupant;
          //     });
          //     props.updateVehicles(values.vehicle, targetUser);
          //   })
          //   .then(() => {
          //     props.updateDismountedUsers(values.occupant);
          //   });
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <FormGroup className={classes.formGroup}>
              <Field name="technician" as={TextField} select label="Assign">
                {props.availableTechnicians.map((user) => (
                  <MenuItem
                    key={user._id}
                    value={user._id}
                  >{`${user.rank} ${user.firstName} ${user.lastName}`}</MenuItem>
                ))}
              </Field>
              {errors.technician && touched.technician ? (
                <span className={classes.errorMessage}>
                  <ErrorMessage name="technician" />
                </span>
              ) : null}
            </FormGroup>
            <Button type="submit">Assign</Button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AssignTechnicianInput;
