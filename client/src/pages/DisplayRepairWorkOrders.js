import React, { useState, useEffect, useContext } from "react";
import RepairWorkOrderTable from "../components/RepairWorkOrderTable/index";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function DisplayRepairWorkOrders() {
  const [repairRequests, setRepairRequests] = useState([]);

  const currentUser = useContext(UserContext);

  useEffect(() => {
    API.getRepairRequests().then((res) => {
      let filteredRepairRequests = [];
      if (currentUser.role === "Maintenance Manager") {
        filteredRepairRequests = res.data.filter((repairRequest) => {
          return repairRequest.repairWorkOrder !== undefined;
        });
      } else if (currentUser.role === "Technician") {
        filteredRepairRequests = res.data.filter((repairRequest) => {
          return (
            repairRequest.repairWorkOrder !== undefined &&
            repairRequest.assignedTo._id === currentUser._id
          );
        });
      }
      console.log(filteredRepairRequests);
      setRepairRequests(filteredRepairRequests);
    });
  }, []);

  return (
    <RepairWorkOrderTable user={currentUser} repairRequests={repairRequests} />
  );
}

export default DisplayRepairWorkOrders;
