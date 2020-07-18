import React, { useState, useEffect, useContext } from "react";
import CreateRepairRequestForm from "../components/CreateRepairRequestForm/index";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function CreateUser() {
  const [vehicle, setVehicle] = useState([]);

  const { _id } = useContext(UserContext);

  useEffect(() => {
    API.getVehicles().then((res) => {
      const targetVehicle = res.data.find(
        (vehicle) => vehicle.occupant._id === _id
      );
      setVehicle(targetVehicle);
    });
  });

  return <CreateRepairRequestForm vehicle={vehicle} />;
}

export default CreateUser;
