import React, { useContext } from "react";
import CreateVehicleForm from "../components/CreateVehicleForm/index";
import operatorVehicles from "../utils/operatorVehicles";
import technicianVehicles from "../utils/technicianVehicles";
import UserContext from "../utils/UserContext";

let formTitle, role, vehicles;

const getProps = function (currentRole) {
  switch (currentRole) {
    case "Operations Manager":
      formTitle = "Create Operator Vehicle";
      role = "Operator";
      vehicles = operatorVehicles;
      break;
    default:
      formTitle = "Create Technician Vehicle";
      role = "Technician";
      vehicles = technicianVehicles;
  }
};

function CreateVehicle() {
  const currentUser = useContext(UserContext);

  getProps(currentUser.role);

  return (
    <CreateVehicleForm formTitle={formTitle} role={role} vehicles={vehicles} />
  );
}

export default CreateVehicle;
