import React, { useState, useEffect, useContext } from "react";
import RepairRequestTable from "../components/RepairRequestTable/index";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function DisplayRepairRequests() {
  const [vehicles, setVehicles] = useState([]);
  const [availableTechnicians, setAvailableTechnicians] = useState([]);

  const currentUser = useContext(UserContext);

  useEffect(() => {
    API.getVehicles()
      .then((res) => {
        const filteredVehicles = res.data.filter((vehicle) => {
          return vehicle.repairRequests.length !== 0;
        });
        setVehicles(filteredVehicles);
      })
      .then(() => {
        API.getAvailableTechnicians().then((res) => {
          setAvailableTechnicians(res.data);
        });
      });
  }, []);

  function updateVehicles(repairRequestId, userObject) {
    let newVehicles = [...vehicles];
    newVehicles.map((vehicle) => {
      if (vehicle.repairRequests) {
        vehicle.repairRequests.map((repairRequest) => {
          if (repairRequest._id === repairRequestId)
            repairRequest.assignedTo = userObject;
        });
      }
    });
    setVehicles(newVehicles);
  }

  function updateAvailableTechnicians(userId) {
    const newAvailableTechnicians = availableTechnicians.filter(
      (technician) => {
        return technician._id !== userId;
      }
    );
    setAvailableTechnicians(newAvailableTechnicians);
  }

  return (
    <RepairRequestTable
      role={currentUser.role}
      vehicles={vehicles}
      availableTechnicians={availableTechnicians}
      updateVehicles={updateVehicles}
      updateAvailableTechnicians={updateAvailableTechnicians}
    />
  );
}

export default DisplayRepairRequests;
