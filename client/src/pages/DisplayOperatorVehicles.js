import React, { useState, useEffect } from 'react';
import DisplayVehicleTable from '../components/DisplayVehicleTable/index'
import API from '../utils/API'

function DisplayOperatorVehicles () {
  const [operatorVehicles, setOperatorVehicles] = useState([])
  const [dismountedOperators, setDismountedOperators] = useState([])

  useEffect(() => {
    API.getOperatorVehicles()
      .then(res => {
        setOperatorVehicles(res.data)
      })
      .then(API.getDismountedOperators()
        .then(res => {
        setDismountedOperators(res.data)
      }))
  }, [])
  
  return (
    <DisplayVehicleTable vehicles={operatorVehicles} roles={"Display Operator Vehicles"} dismountedUsers={dismountedOperators} />
  )
}

export default DisplayOperatorVehicles
