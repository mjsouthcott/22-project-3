import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import KeyboardCapslockIcon from "@material-ui/icons/KeyboardCapslock";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
  },
  items: {
    margin: theme.spacing(2),
  },
  details: {
    display: "flex",
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

Profile.propTypes = {
  className: PropTypes.string,
};

export default function Profile(props) {
  const { className, ...rest } = props;
  const classes = useStyles();

  //get the logged user's info passed in
  const userInfo = useContext(UserContext);

  // get new password for updating
  const [vehicle, setVehicle] = useState({});
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirm: "",
  });

  const [error, setError] = useState({
    message: "",
    severity: "",
  });

  const handlePasswordChange = (event) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
  };

  //TODO: aoi call to update the password in the database
  const handleFormSubmit = (event) => {
    //check if any input is empty
    if (!(password.oldPassword && password.newPassword && password.confirm)) {
      setError({ message: "Inputs shouldn't be blank.", severity: "error" });
    } else if (password.newPassword !== password.confirm) {
      setError({
        message: "New password entered doesn't match.",
        severity: "error",
      });
    } else {
      const data = {
        id: userInfo._id,
        oldPassword: password.oldPassword,
        newPassword: password.newPassword,
      };

      API.updateUserPassword(data).then((res) => {
        if (res.data) {
          setError({
            message: "Password is changed successfully",
            severity: "success",
          });
          setPassword({
            oldPassword: "",
            newPassword: "",
            confirm: "",
          });
        } else {
          setError({
            message: "Password entered is incorrect.",
            severity: "error",
          });
        }
      });
    }
  };

  useEffect(() => {
    API.getVehicles().then((res) => {
      let userVehicle = res.data.filter((vehicle) => {
        return vehicle.occupant && vehicle.occupant._id == userInfo._id;
      });
      if (userVehicle[0]) setVehicle(userVehicle[0]);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xl={8} md={6} sm={12}>
          {/* edit user profile  */}
          <Card {...rest} className={clsx(classes.card, className)}>
            <form autoComplete="off" noValidate>
              <CardContent>
                <div className={classes.details}>
                  <div>
                    <Typography gutterBottom variant="h3">
                      {userInfo.firstName} {userInfo.lastName}
                    </Typography>

                    <Typography className={classes.locationText} variant="h5">
                      {userInfo.role}
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <Divider />

              <List>
                <ListItem className={classes.items}>
                  <ListItemAvatar>
                    <KeyboardCapslockIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <b>Rank: </b> {userInfo.rank}
                  </ListItemText>
                </ListItem>
                <Divider variant="inset" component="li" />

                <ListItem className={classes.items}>
                  <ListItemAvatar>
                    <AccountBoxIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <b>Occupation: </b> {userInfo.occupation}
                  </ListItemText>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className={classes.items}>
                  <ListItemAvatar>
                    <DriveEtaIcon />
                  </ListItemAvatar>
                  <ListItemText>
                    <b>Vehicle Information: </b>

                    {vehicle.type ? (
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                        Type: {vehicle.type}
                        </ListItem>
                        
                        <ListItem button className={classes.nested}>
                        serviceable: {vehicle.serviceable? "Yes" : "No"}
                        </ListItem>
                        
                      </List>
                    ) : (
                      "None"
                    )}
                  </ListItemText>
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </form>
          </Card>
        </Grid>

        <Grid item xl={4} md={6} sm={12}>
          {/* user basic info  */}
          <Card {...rest} className={clsx(classes.card, className)}>
            <form>
              <CardHeader subheader="Update password" title="Password" />
              <Divider />
              <CardContent>
                <TextField
                  fullWidth
                  label="Old Password"
                  name="oldPassword"
                  onChange={handlePasswordChange}
                  value={password.oldPassword}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="New Password"
                  name="newPassword"
                  onChange={handlePasswordChange}
                  style={{ marginTop: "1rem" }}
                  type="password"
                  value={password.newPassword}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Confirm password"
                  name="confirm"
                  onChange={handlePasswordChange}
                  style={{ marginTop: "1rem" }}
                  type="password"
                  value={password.confirm}
                  variant="outlined"
                />
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  color="primary"
                  variant="outlined"
                  className={classes.button}
                  onClick={handleFormSubmit}
                >
                  Update
                </Button>
              </CardActions>

              <Alert
                variant="outlined"
                severity={error.severity}
                style={{ opacity: error.message ? 1 : 0 }}
                onClose={() => setError({})}
              >
                {error.message}
              </Alert>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
