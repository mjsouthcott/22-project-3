import React, { useState, useEffect } from 'react';
import AssignVehicleOccupantInput from '../AssignVehicleOccupantInput/index'
import API from '../../utils/API';

function AssignOperatorVehicleOccupantInput () {
  const [dismountedOperators, setDismountedOperators] = useState([])

  useEffect(() => {
    API.getDismountedOperators()
      .then(res => {
        console.log(res.data)
        setDismountedOperators(res.data)
      })
  }, [])

  return (
      // TODO: Pass ability to set state down to subcomponent as props
      <AssignVehicleOccupantInput users={dismountedOperators} />
  )
}

export default AssignOperatorVehicleOccupantInput