import React from "react";
import CreateVehicleForm from "../components/CreateVehicleForm/index";
import operatorVehicles from "../utils/operatorVehicles";
import technicianVehicles from "../utils/technicianVehicles";

// const ROLE = "Operations Manager";
const ROLE = "Maintenance Manager";

let formTitle, role, vehicles;

const getProps = function (role) {
  switch (role) {
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

getProps(ROLE);

function CreateVehicle() {
  return (
    <CreateVehicleForm formTitle={formTitle} role={role} vehicles={vehicles} />
  );
}

export default CreateVehicle;
