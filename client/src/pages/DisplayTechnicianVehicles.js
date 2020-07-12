import React, { useState, useEffect } from 'react';
import DisplayVehicleTable from '../components/DisplayVehicleTable/index'
import API from '../utils/API'

function DisplayTechnicianVehicles () {
  const [technicianVehicles, setTechnicianVehicles] = useState([])

  useEffect(() => {
    API.getTechnicianVehicles()
      .then(res => {
        console.log(res.data)
        setTechnicianVehicles(res.data)
      })
  }, [])
  
  return (
    <DisplayVehicleTable vehicles={technicianVehicles} roles={"Display Technician Vehicles"}/>
  )
}

export default DisplayTechnicianVehicles