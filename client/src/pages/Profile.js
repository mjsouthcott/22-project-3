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
    marginRight: theme.spacing(2),
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
  const [userInfo, setUserInfo] = useState(user)

const handleChange = (event) => {
  setUserInfo({
    ...userInfo,
    [event.target.name]: event.target.value,
  });
};

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          {/* user basic info  */}
          <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent>
              <div className={classes.details}>
                <div>
                  <Typography gutterBottom variant="h2">
                    {userInfo.firstName} {userInfo.lastName}
                  </Typography>

                  <Typography
                    className={classes.locationText}
                    color="textSecondary"
                    variant="body1"
                  >
                    Role: {userInfo.role}
                  </Typography>
                  <Typography
                    className={classes.locationText}
                    color="textSecondary"
                    variant="body1"
                  >
                     Rank: {userInfo.rank}
                  </Typography>
                  <Typography
                    className={classes.locationText}
                    color="textSecondary"
                    variant="body1"
                  >
                    Occupation: {userInfo.occupation}
                  </Typography>


                </div>
              </div>
            </CardContent>
            <Divider />
          </Card>
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          {/* edit user profile  */}
          <Card {...rest} className={clsx(classes.root, className)}>
            <form autoComplete="off" noValidate>
              <CardHeader
                subheader="The information can be edited"
                title="Profile"
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="First name"
                      margin="dense"
                      name="firstName"
                      onChange={handleChange}
                      required
                      value={userInfo.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Last name"
                      margin="dense"
                      name="lastName"
                      onChange={handleChange}
                      required
                      value={userInfo.lastName}
                      variant="outlined"
                    />
                  </Grid>




                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button color="primary" variant="contained">
                  Save details
                </Button>
              </CardActions>
            </form>
          </Card>{" "}
        </Grid>
      </Grid>
    </div>
  );
}
