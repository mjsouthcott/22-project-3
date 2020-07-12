import React from 'react';
import CreateVehicleForm from '../components/CreateVehicleForm/index'
import operatorVehicles from '../utils/operatorVehicles'

function CreateOperatorVehicleForm () {
  return (
    <CreateVehicleForm formTitle={'Create Operator Vehicle'} role={"Operator"} vehicles={operatorVehicles} />
  )
}

export default CreateOperatorVehicleForm