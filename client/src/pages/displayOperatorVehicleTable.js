import React, { useState, useEffect } from 'react';
import VehicleTable from '../components/VehicleTable/index'
import API from '../utils/API'

function DisplayOperatorVehicleTable () {
  const [operatorVehicles, setOperatorVehicles] = useState([])

  useEffect(() => {
    API.getOperatorVehicles()
      .then(res => {
        console.log(res.data)
        setOperatorVehicles(res.data)
      })
  }, [])
  
  return (
    <VehicleTable vehicles={operatorVehicles} roles={"Operator Vehicles"}/>
  )
}

export default DisplayOperatorVehicleTable
