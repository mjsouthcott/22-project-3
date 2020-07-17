import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable/index";
import API from "../utils/API";

// const ROLE = "Operations Manager";
const ROLE = "Maintenance Manager";

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

getProps(ROLE);

function DisplayUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (ROLE === "Operations Manager") {
      API.getOperators().then((res) => {
        setUsers(res.data);
      });
    } else if (ROLE === "Maintenance Manager") {
      API.getTechnicians().then((res) => {
        setUsers(res.data);
      });
    }
  }, []);

  return <UserTable users={users} pageTitle={pageTitle} />;
}

export default DisplayUsers;
