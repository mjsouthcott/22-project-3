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

function AssignUserInput(props) {
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
    occupant: Yup.string().required("Required"),
  });

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={{
          vehicle: props.vehicle._id,
          occupant: "",
        }}
        validationSchema={UserFormSchema}
        onSubmit={(values) => {
          API.updateVehicleOccupant(values.vehicle, values.occupant)
            .then(() => {
              API.updateUserDismountedStatus(values.occupant, true);
            })
            .then(() => {
              const targetUser = props.dismountedUsers.find((user) => {
                return user._id === values.occupant;
              });
              props.updateVehicles(values.vehicle, targetUser);
            })
            .then(() => {
              props.updateDismountedUsers(values.occupant);
            });
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <FormGroup className={classes.formGroup}>
              <Field name="occupant" as={TextField} select label="Assign">
                {props.dismountedUsers.map((user) => (
                  <MenuItem
                    key={user._id}
                    value={user._id}
                  >{`${user.rank} ${user.firstName} ${user.lastName}`}</MenuItem>
                ))}
              </Field>
              {errors.occupant && touched.occupant ? (
                <span className={classes.errorMessage}>
                  <ErrorMessage name="occupant" />
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

export default AssignUserInput;
