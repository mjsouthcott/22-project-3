import React from 'react';
import VehicleForm from '../components/VehicleForm/index'
import technicianVehicles from '../utils/technicianVehicles'

function CreateTechnicianVehicle () {
  return (
    <VehicleForm formTitle={'Create Technician Vehicle'} vehicles={technicianVehicles} />
  )
}

export default CreateTechnicianVehicle