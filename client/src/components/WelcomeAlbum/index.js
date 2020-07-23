import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import UserContext from "../../utils/UserContext";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function WelcomeAlbum() {
  const classes = useStyles();

  const currentUser = useContext(UserContext);

  return (
    <React.Fragment>
      {/* <img align="center" src="/assets/vehicleBanner.jpg" alt="logo" width="300px" height="200px" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "2%",display: "block"}}/> */}
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            Welcome to eTripleR
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Your tactical maintenance management solution
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            You're currently logged in as {currentUser.rank}{" "}
            {currentUser.firstName} {currentUser.lastName} with role{" "}
            {currentUser.role}.
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}
