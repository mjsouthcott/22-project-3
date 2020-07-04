import React from 'react';
import UserForm from '../components/UserForm/index'

import technicianRanks from '../utils/technicianRanks'
import technicianOccupations from '../utils/technicianOccupations'

function CreateTechnician () {
  return (
    <UserForm formTitle={'Create Technician'} role={'Technician'} ranks={technicianRanks} occupations={technicianOccupations} />
  )
}

export default CreateTechnician
