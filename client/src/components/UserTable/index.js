import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  typography: {
    marginBottom: 15,
  },
});

function getRankIconSrc(user) {
  switch (user.rank) {
    case "Private":
      return "assets/images/rankIcons/army-private.png";
    case "Craftsman":
      return "assets/images/rankIcons/army-craftsman.png";
    case "Corporal":
      return "assets/images/rankIcons/army-corporal.png";
    case "Master Corporal":
      return "assets/images/rankIcons/army-master-corporal.png";
    case "Sergeant":
      return "assets/images/rankIcons/army-sergeant.png";
    case "Warrant Officer":
      return "assets/images/rankIcons/army-warrant-officer.png";
    case "Master Warrant Officer":
      return "assets/images/rankIcons/army-master-warrant-officer.png";
    case "2nd Lieutenant":
      return "assets/images/rankIcons/army-2nd-lieutenant.png";
    case "Lieutenant":
      return "assets/images/rankIcons/army-lieutenant.png";
    case "Captain":
      return "assets/images/rankIcons/army-captain.png";
    case "Major":
      return "assets/images/rankIcons/army-major.png";
  }
}

function UserTable(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent>
          <Typography variant="h4" className={classes.typography}>
            {props.pageTitle}
          </Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Icon</TableCell>
                  <TableCell align="right">Rank</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Occupation</TableCell>
                  <TableCell align="right">Available</TableCell>
                  <TableCell align="right">Mounted</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell component="th" scope="row">
                      <img
                        src={getRankIconSrc(user)}
                        alt={user.rank}
                        height="100"
                      ></img>
                    </TableCell>
                    <TableCell align="right">{user.rank}</TableCell>
                    <TableCell align="right">{user.firstName}</TableCell>
                    <TableCell align="right">{user.lastName}</TableCell>
                    <TableCell align="right">{user.occupation}</TableCell>
                    <TableCell align="right">
                      {user.available ? (
                        <Chip
                          label="Yes"
                          style={{ color: "white", backgroundColor: "green" }}
                        />
                      ) : (
                        <Chip
                          label="No"
                          style={{ color: "white", backgroundColor: "red" }}
                        />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {user.mounted ? (
                        <Chip
                          label="Yes"
                          style={{ color: "white", backgroundColor: "green" }}
                        />
                      ) : (
                        <Chip
                          label="No"
                          style={{ color: "white", backgroundColor: "red" }}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

export default UserTable;
