import React, { useState, useEffect } from "react";
import CreateRepairRequestForm from "../components/CreateRepairRequestForm/index";
import API from "../utils/API";

const CURRENT_USER_ID = "5f12ed0a96c84c4840bf40c6"; // Passed through Context/as props

function CreateUser() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    API.getVehicles().then((res) => {
      const targetVehicle = res.data.find(
        (vehicle) => vehicle.occupant._id === CURRENT_USER_ID
      );
      setVehicle(targetVehicle);
    });
  });

  return <CreateRepairRequestForm vehicle={vehicle} />;
}

export default CreateUser;
