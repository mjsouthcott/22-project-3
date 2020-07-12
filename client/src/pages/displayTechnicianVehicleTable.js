import React, { useState, useEffect } from 'react';
import VehicleTable from '../components/VehicleTable/index'
import API from '../utils/API'

function DisplayTechnicianVehicleTable () {
  const [technicianVehicles, setTechnicianVehicles] = useState([])

  useEffect(() => {
    API.getTechnicianVehicles()
      .then(res => {
        console.log(res.data)
        setTechnicianVehicles(res.data)
      })
  }, [])
  
  return (
    <VehicleTable vehicles={technicianVehicles} roles={"Technician Vehicles"}/>
  )
}

export default DisplayTechnicianVehicleTable