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
        let filteredVehicles = [];
        if (currentUser.role === "Maintenance Manager") {
          filteredVehicles = res.data.filter((vehicle) => {
            return vehicle.repairRequests.length !== 0;
          });
        } else if (currentUser.role === "Technician") {
          res.data.forEach((vehicle) => {
            vehicle.repairRequests.forEach((repairRequest) => {
              if (
                repairRequest.assignedTo &&
                repairRequest.assignedTo._id === currentUser._id
              )
                filteredVehicles.push(vehicle);
            });
          });
        }
        console.log(filteredVehicles);
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
      user={currentUser}
      vehicles={vehicles}
      availableTechnicians={availableTechnicians}
      updateVehicles={updateVehicles}
      updateAvailableTechnicians={updateAvailableTechnicians}
    />
  );
}

export default DisplayRepairRequests;
