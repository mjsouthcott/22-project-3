import React, { useState, useEffect } from "react";
import RepairRequestTable from "../components/RepairRequestTable/index";
import API from "../utils/API";

const ROLE = "Maintenance Manager";
// const ROLE = "Technician"

function DisplayRepairRequests() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    API.getVehicles().then((res) => {
      const filteredVehicles = res.data.filter((vehicle) => {
        return vehicle.repairRequests.length !== 0;
      });
      console.log(filteredVehicles);
      setVehicles(filteredVehicles);
    });
  }, []);

  return <RepairRequestTable role={ROLE} vehicles={vehicles} />;
}

export default DisplayRepairRequests;