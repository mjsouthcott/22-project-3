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
import API from "../../utils/API";
import "./style.css";
var to = require("to-case");

function UserForm(props) {
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
    rank: Yup.string().required("Required"),
    firstName: Yup.string()
      .matches(
        "^[a-zA-Z][a-zA-Z-. ]*$",
        "Must begin with a letter, and can only contain letters and spaces, - and ."
      )
      .min(2, "Minimum 2 letters")
      .max(30, "Maximum 30 letters")
      .required("Required"),
    lastName: Yup.string()
      .matches(
        "^[a-zA-Z][a-zA-Z-. ]*$",
        "Must begin with a letter, and can only contain letters and spaces, - and ."
      )
      .min(2, "Minimum 2 letters")
      .max(30, "Maximum 30 letters")
      .required("Required"),
    occupation: Yup.string().required("Required"),
    username: Yup.string()
      .matches(
        "^[a-zA-Z][a-zA-Z0-9]*$",
        "Must begin with a letter, and can only contain letters and numbers"
      )
      .min(6, "Minimum 6 characters")
      .max(20, "Maximum 20 characters")
      .required("Required"),
    password: Yup.string()
      .matches(
        "^[a-zA-Z0-9!@#%$&]*$",
        "Can only contain letters, numbers, !, @, #, $, % and &"
      )
      .min(8, "Minimum 8 characters")
      .max(20, "Maximum 20 characters")
      .required("Required"),
  });

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            {props.formTitle}
          </Typography>
          <Formik
            initialValues={{
              role: props.role,
              rank: "",
              firstName: "",
              lastName: "",
              occupation: "",
              username: "",
              password: "",
            }}
            validationSchema={UserFormSchema}
            onSubmit={(values) => {
              const user = {
                role: props.role,
                rank: values.rank,
                firstName: to.title(values.firstName).trim(),
                lastName: to.title(values.lastName).trim(),
                occupation: values.occupation,
                username: to.lower(values.username),
                password: values.password,
              };
              API.saveUser(user);

              // TODO: Add page redirect after save
            }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <FormGroup className={classes.formGroup}>
                  <Field name="rank" as={TextField} select label="Rank">
                    {props.ranks.map((rank) => (
                      <MenuItem key={rank} value={rank}>
                        {rank}
                      </MenuItem>
                    ))}
                  </Field>
                  {errors.rank && touched.rank ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="rank" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field name="firstName" as={TextField} label="First Name" />
                  {errors.firstName && touched.firstName ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="firstName" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field name="lastName" as={TextField} label="Last Name" />
                  {errors.lastName && touched.lastName ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="lastName" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field
                    name="occupation"
                    as={TextField}
                    select
                    label="Occupation"
                  >
                    {props.occupations.map((occupation) => (
                      <MenuItem key={occupation} value={occupation}>
                        {occupation}
                      </MenuItem>
                    ))}
                  </Field>
                  {errors.occupation && touched.occupation ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="occupation" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field name="username" as={TextField} label="Username" />
                  {errors.username && touched.username ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="username" />
                    </span>
                  ) : null}
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <Field name="password" as={TextField} label="Password" />
                  {errors.password && touched.password ? (
                    <span className={classes.errorMessage}>
                      <ErrorMessage name="password" />
                    </span>
                  ) : null}
                </FormGroup>
                <Button type="submit">Create</Button>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
}

export default UserForm;
