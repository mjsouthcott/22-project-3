import React, { useState, useEffect } from 'react';
import DisplayUserTable from '../components/DisplayUserTable/index'
import API from '../utils/API'

function DisplayTechnicians () {
  const [technicians, setTechnicians] = useState([])

  useEffect(() => {
    API.getTechnicians()
      .then(res => {
        setTechnicians(res.data)
      })
  }, [])
  
  return (
    <DisplayUserTable users={technicians} roles={"Display Technicians"}/>
  )
}

export default DisplayTechnicians
