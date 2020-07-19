import React from "react";

const UserContext = React.createContext({
  _id: "",
  role: "",
  rank: "",
  firstName: "",
  lastName: "",
  occupation: "",
  available: false,
  mounted: false,
  username: "",
});

export default UserContext;
