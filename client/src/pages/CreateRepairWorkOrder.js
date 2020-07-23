import React, { useState, useEffect, useContext } from "react";
import CreateRepairWorkOrderForm from "../components/CreateRepairWorkOrderForm/index";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function CreateRepairWorkOrder() {
  const [vehicles, setVehicles] = useState([]);

  const currentUser = useContext(UserContext);

  useEffect(() => {
    API.getVehicles().then((res) => {
      let filteredVehicles = [];
      res.data.forEach((vehicle) => {
        vehicle.repairRequests.forEach((repairRequest) => {
          if (
            repairRequest.assignedTo &&
            repairRequest.assignedTo._id === currentUser._id &&
            repairRequest.repairWorkOrder === undefined
          )
            filteredVehicles.push(vehicle);
        });
      });
      setVehicles(filteredVehicles);
    });
  });

  return <CreateRepairWorkOrderForm user={currentUser} vehicles={vehicles} />;
}

export default CreateRepairWorkOrder;
