import React, { useState, useEffect } from 'react';
import UserTable from '../components/UserTable/index'
import API from '../utils/API'

function DisplayOperatorTable () {
  const [operators, setOperators] = useState([])

  useEffect(() => {
    API.getOperators()
      .then(res => {
        setOperators(res.data)
      })
  }, [])
  
  return (
    <UserTable users={operators} roles={"Operators"}/>
  )
}

export default DisplayOperatorTable
