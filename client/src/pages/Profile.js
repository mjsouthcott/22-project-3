import React, { useContext, useState } from "react";
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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  details: {
    display: "flex",
  },

  progress: {
    marginTop: theme.spacing(2),
  },
  uploadButton: {
    marginLeft: theme.spacing(2),
  },
}));

Profile.propTypes = {
  className: PropTypes.string,
};

export default function Profile(props) {
  const { className, ...rest } = props;
  const classes = useStyles();

  //get the logged user's info passed in
  const user = useContext(UserContext);
  console.log(user);

  // set the userInfo for editing
  const [userInfo, setUserInfo] = useState(user);

  // get new password for updating
  const [password, setPassword] = useState({
    oldPassword:"",
    newPassword: "",
    confirm: "",
  });

  const handleUserInfoChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  //TODO: aoi call to update the password in the database 
  const handlePasswordChange = (event) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item md={6} xl={8} sm={12}>
          {/* edit user profile  */}
          <Card {...rest} className={clsx(classes.root, className)}>
            <form autoComplete="off" noValidate>
              <CardContent>
                <div className={classes.details}>
                  <div>
                    <Typography gutterBottom variant="h2">
                      {userInfo.firstName} {userInfo.lastName}
                    </Typography>

                    <Typography
                      className={classes.locationText}
                      variant="body1"
                    >
                      {userInfo.role}
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <Divider />

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Rank"
                      margin="dense"
                      name="rank"
                      onChange={handleUserInfoChange}
                      disabled
                      value={userInfo.rank}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Occupation"
                      margin="dense"
                      name="occupation"
                      onChange={handleUserInfoChange}
                      disabled
                      value={userInfo.occupation}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="First name"
                      margin="dense"
                      name="firstName"
                      onChange={handleUserInfoChange}
                      required
                      value={userInfo.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Last name"
                      margin="dense"
                      name="lastName"
                      onChange={handleUserInfoChange}
                      required
                      value={userInfo.lastName}
                      variant="outlined"
                    />
                  </Grid>

                  {/* <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      margin="dense"
                      name="email"
                      onChange={handleUserInfoChange}
                      required
                      value={userInfo.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      margin="dense"
                      name="contactNumber"
                      onChange={handleUserInfoChange}
                      required
                      value={userInfo.contactNumber}
                      variant="outlined"
                    />
                  </Grid> */}
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button color="primary" variant="contained">
                  Save details
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>

        <Grid item md={6} xl={4} sm={12}>
          {/* user basic info  */}
          <Card {...rest} className={clsx(classes.root, className)}>
            <form>
              <CardHeader subheader="Update password" title="Password" />
              <Divider />
              <CardContent>
                <TextField
                  fullWidth
                  label="Old Password"
                  name="oldPassword"
                  onChange={handlePasswordChange}
                  type="password"
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
                <Button color="primary" variant="outlined">
                  Update
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
