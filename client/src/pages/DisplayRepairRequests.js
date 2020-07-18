import React, { useState, useEffect } from "react";
import RepairRequestTable from "../components/RepairRequestTable/index";
import API from "../utils/API";

// const ROLE = "Maintenance Manager";
const ROLE = "Technician";

function DisplayRepairRequests() {
  const [vehicles, setVehicles] = useState([]);
  const [availableTechnicians, setAvailableTechnicians] = useState([]);

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
      role={ROLE}
      vehicles={vehicles}
      availableTechnicians={availableTechnicians}
      updateVehicles={updateVehicles}
      updateAvailableTechnicians={updateAvailableTechnicians}
    />
  );
}

export default DisplayRepairRequests;
