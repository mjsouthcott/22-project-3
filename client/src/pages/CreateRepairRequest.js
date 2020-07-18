import React, { useState, useEffect, useContext } from "react";
import CreateRepairRequestForm from "../components/CreateRepairRequestForm/index";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function CreateRepairRequest() {
  const [vehicle, setVehicle] = useState([]);

  const currentUser = useContext(UserContext);

  useEffect(() => {
    API.getVehicles().then((res) => {
      const targetVehicle = res.data.find(
        (vehicle) => vehicle.occupant._id === currentUser._id
      );
      setVehicle(targetVehicle);
    });
  });

  return <CreateRepairRequestForm vehicle={vehicle} />;
}

export default CreateRepairRequest;
