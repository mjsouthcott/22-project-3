import React, { useState, useEffect } from 'react';
import UserTable from '../components/UserTable/index'
import API from '../utils/API'

function DisplayTechnicianTable () {
  const [technicians, setTechnicians] = useState([])

  useEffect(() => {
    API.getTechnicians()
      .then(res => {
        setTechnicians(res.data)
      })
  }, [])
  
  return (
    <UserTable users={technicians} roles={"Technicians"}/>
  )
}

export default DisplayTechnicianTable
