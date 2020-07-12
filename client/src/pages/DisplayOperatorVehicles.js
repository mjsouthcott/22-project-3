import React, { useState, useEffect } from 'react';
import DisplayVehicleTable from '../components/DisplayVehicleTable/index'
import API from '../utils/API'

function DisplayOperatorVehicles () {
  const [operatorVehicles, setOperatorVehicles] = useState([])

  useEffect(() => {
    API.getOperatorVehicles()
      .then(res => {
        console.log(res.data)
        setOperatorVehicles(res.data)
      })
  }, [])
  
  return (
    <DisplayVehicleTable vehicles={operatorVehicles} roles={"Display Operator Vehicles"}/>
  )
}

export default DisplayOperatorVehicles
