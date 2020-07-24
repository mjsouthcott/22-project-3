import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";
import { Formik, Form } from "formik";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import "./style.css";

function SetUpMobileWorkshop() {
  const currentUser = useContext(UserContext);

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

  function setLocation() {
    API.getVehicles()
      .then((res) => {
        const targetVehicle = res.data.find(
          (vehicle) =>
            vehicle.occupant && vehicle.occupant._id === currentUser._id
        );
        return targetVehicle;
      })
      .then((targetVehicle) => {
        navigator.geolocation.getCurrentPosition((pos) => {
          API.updateCommandPostLocation(targetVehicle._id, {
            latitude: pos.coords.latitude.toFixed(7),
            longitude: pos.coords.longitude.toFixed(7),
          });
        });
      });
  }

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            Set Up Mobile Workshop
          </Typography>
          <Typography variant="h6" className={classes.typography}>
            Set up mobile workshop in current location
          </Typography>
          <Formik
            onSubmit={() => {
              setLocation();

              // Show alert with form submission feedback
              handleClick();

              // Reset form
              resetForm();
            }}
          >
            {() => (
              <Form>
                <Button type="submit">Set Up</Button>
              </Form>
            )}
          </Formik>
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
          Mobile workshop set up in current location
        </Alert>
      )}
    </Container>
  );
}

export default SetUpMobileWorkshop;
