import React from 'react';
import UserForm from '../components/UserForm/index'
import operatorRanks from '../utils/operatorRanks'
import operatorOccupations from '../utils/operatorOccupations'

function CreateOperator () {
  return (
    <UserForm formTitle={'Create Operator'} role={'Operator'} ranks={operatorRanks} occupations={operatorOccupations} />
  )
}

export default CreateOperator
