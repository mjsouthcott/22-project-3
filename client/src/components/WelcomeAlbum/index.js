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
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Welcome, {currentUser.rank} {currentUser.firstName}{" "}
            {currentUser.lastName}. Your role is {currentUser.role}.
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}
