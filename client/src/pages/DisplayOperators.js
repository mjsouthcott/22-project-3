import React, { useState, useEffect } from 'react';
import DisplayUserTable from '../components/DisplayUserTable/index'
import API from '../utils/API'

function DisplayOperators () {
  const [operators, setOperators] = useState([])

  useEffect(() => {
    API.getOperators()
      .then(res => {
        setOperators(res.data)
      })
  }, [])
  
  return (
    <DisplayUserTable users={operators} roles={"Display Operators"}/>
  )
}

export default DisplayOperators
