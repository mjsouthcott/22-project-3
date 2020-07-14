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
      .then(() => {
        API.getDismountedOperators()
          .then(res => {
          setDismountedOperators(res.data)
          })
      })
  }, [])

  function updateOperatorVehicles (vehicleId, userObject) {
    let newOperatorVehicles = [...operatorVehicles]
    const targetVehicle = newOperatorVehicles.find(vehicle => {
      return vehicle._id === vehicleId
    })
    targetVehicle.occupant = userObject
    setOperatorVehicles(newOperatorVehicles)
  }

  function updateDismountedOperators (userId) {
    const newDismountedOperators = dismountedOperators.filter(operator => {
      return operator._id !== userId
    })
    setDismountedOperators(newDismountedOperators)
  }
  
  return (
    <DisplayVehicleTable vehicles={operatorVehicles} roles={"Display Operator Vehicles"} dismountedUsers={dismountedOperators} updateOperatorVehicles={updateOperatorVehicles} updateDismountedOperators={updateDismountedOperators}/>
  )
}

export default DisplayOperatorVehicles
