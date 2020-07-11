import React from 'react';
import VehicleForm from '../components/VehicleForm/index'
import operatorVehicles from '../utils/operatorVehicles'

function CreateOperatorVehicle () {
  return (
    <VehicleForm formTitle={'Create Operator Vehicle'} role={"Operator"} vehicles={operatorVehicles} />
  )
}

export default CreateOperatorVehicle