import React, { useState, useEffect, useContext } from "react";
import VehicleTable from "../components/VehicleTable/index";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

let pageTitle;

const getProps = function (role) {
  switch (role) {
    case "Operations Manager":
      pageTitle = "Display Operator Vehicles";
      break;
    default:
      pageTitle = "Display Technician Vehicles";
  }
};

function DisplayVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [dismountedUsers, setDismountedUsers] = useState([]);

  const currentUser = useContext(UserContext);

  getProps(currentUser.role);

  useEffect(() => {
    if (currentUser.role === "Operations Manager") {
      API.getOperatorVehicles()
        .then((res) => {
          setVehicles(res.data);
        })
        .then(() => {
          API.getDismountedOperators().then((res) => {
            setDismountedUsers(res.data);
          });
        });
    } else if (currentUser.role === "Maintenance Manager") {
      API.getTechnicianVehicles()
        .then((res) => {
          setVehicles(res.data);
        })
        .then(() => {
          API.getDismountedTechnicians().then((res) => {
            setDismountedUsers(res.data);
          });
        });
    }
  }, []);

  function updateVehicles(vehicleId, userObject) {
    let newVehicles = [...vehicles];
    const targetVehicle = newVehicles.find((vehicle) => {
      return vehicle._id === vehicleId;
    });
    targetVehicle.occupant = userObject;
    setVehicles(newVehicles);
  }

  function updateDismountedUsers(userId) {
    const newDismountedUsers = dismountedUsers.filter((user) => {
      return user._id !== userId;
    });
    setDismountedUsers(newDismountedUsers);
  }

  return (
    <VehicleTable
      vehicles={vehicles}
      pageTitle={pageTitle}
      dismountedUsers={dismountedUsers}
      updateVehicles={updateVehicles}
      updateDismountedUsers={updateDismountedUsers}
    />
  );
}

export default DisplayVehicles;
