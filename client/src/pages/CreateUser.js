import React, { useContext } from "react";
import CreateUserForm from "../components/CreateUserForm/index";
import operatorRanks from "../utils/operatorRanks";
import technicianRanks from "../utils/technicianRanks";
import operatorOccupations from "../utils/operatorOccupations";
import technicianOccupations from "../utils/technicianOccupations";
import UserContext from "../utils/UserContext";

let formTitle, role, ranks, occupations;

const getProps = function (currentRole) {
  switch (currentRole) {
    case "Operations Manager":
      formTitle = "Create Operator";
      role = "Operator";
      ranks = operatorRanks;
      occupations = operatorOccupations;
      break;
    default:
      formTitle = "Create Technician";
      role = "Technician";
      ranks = technicianRanks;
      occupations = technicianOccupations;
  }
};

function CreateUser() {
  const currentUser = useContext(UserContext);

  getProps(currentUser.role);

  return (
    <CreateUserForm
      formTitle={formTitle}
      role={role}
      ranks={ranks}
      occupations={occupations}
    />
  );
}

export default CreateUser;
