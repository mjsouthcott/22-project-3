import React, { useState, useEffect, useContext } from "react";
import UserTable from "../components/UserTable/index";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

let pageTitle;

const getProps = function (role) {
  switch (role) {
    case "Operations Manager":
      pageTitle = "Display Operators";
      break;
    default:
      pageTitle = "Display Technicians";
  }
};

function DisplayUsers() {
  const [users, setUsers] = useState([]);

  const currentUser = useContext(UserContext);

  getProps(currentUser.role);

  useEffect(() => {
    if (currentUser.role === "Operations Manager") {
      API.getOperators().then((res) => {
        setUsers(res.data);
      });
    } else if (currentUser.role === "Maintenance Manager") {
      API.getTechnicians().then((res) => {
        setUsers(res.data);
      });
    }
  }, []);

  return <UserTable users={users} pageTitle={pageTitle} />;
}

export default DisplayUsers;
