import React, { useState, useEffect } from "react";
import VehicleTable from "../components/VehicleTable/index";
import API from "../utils/API";

// const ROLE = "Operations Manager";
const ROLE = "Maintenance Manager";

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

getProps(ROLE);

function DisplayVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [dismountedUsers, setDismountedUsers] = useState([]);

  useEffect(() => {
    if (ROLE === "Operations Manager") {
      API.getOperatorVehicles()
        .then((res) => {
          setVehicles(res.data);
        })
        .then(() => {
          API.getDismountedOperators().then((res) => {
            setDismountedUsers(res.data);
          });
        });
    } else if (ROLE === "Maintenance Manager") {
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
