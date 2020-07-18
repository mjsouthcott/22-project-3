import React from "react";
import API from "../utils/API";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Typography,
  Container,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
const to = require("to-case");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
        eTripleR &nbsp;
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          //setting initial value to correct user info fro testing----------------------------------
          initialValues={{
            username: "maxguo",
            password: "password",
          }}
          onSubmit={(values) => {
            const user = {
              username: to.lower(values.username),
              password: values.password,
            };
            API.login(user)
              .then(function (res) {
                props.handleLogin(res.data);
              })
              .catch(function (err) {
                console.log("credentials are incorrect");
              });
          }}
        >
          {({ errors, touched, values }) => (
            <Form className={classes.form}>
              <FormGroup className={classes.formGroup}>
                <Field
                  as={TextField}
                  name="username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="username"
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
