import React from 'react';
import CreateUserForm from '../components/CreateUserForm/index'
import technicianRanks from '../utils/technicianRanks'
import technicianOccupations from '../utils/technicianOccupations'

function CreateTechnicianForm () {
  return (
    <CreateUserForm formTitle={'Create Technician'} role={'Technician'} ranks={technicianRanks} occupations={technicianOccupations} />
  )
}

export default CreateTechnicianForm
