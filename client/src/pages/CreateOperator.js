import React from 'react';
import CreateUserForm from '../components/CreateUserForm/index'
import operatorRanks from '../utils/operatorRanks'
import operatorOccupations from '../utils/operatorOccupations'

function CreateOperatorForm () {
  return (
    <CreateUserForm formTitle={'Create Operator'} role={'Operator'} ranks={operatorRanks} occupations={operatorOccupations} />
  )
}

export default CreateOperatorForm
