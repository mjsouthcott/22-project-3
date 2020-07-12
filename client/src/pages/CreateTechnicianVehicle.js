import React from 'react';
import CreateVehicleForm from '../components/CreateVehicleForm/index'
import technicianVehicles from '../utils/technicianVehicles'

function CreateTechnicianVehicleForm () {
  return (
    <CreateVehicleForm formTitle={'Create Technician Vehicle'} role={"Technician"} vehicles={technicianVehicles} />
  )
}

export default CreateTechnicianVehicleForm