import React from 'react';
import EquipmentForm from '../components/EquipmentForm/index'

import operatorEquipment from '../utils/operatorEquipment'

function CreateOperatorEquipment () {
  return (
    <EquipmentForm formTitle={'Create Operator Equipment'} types={operatorEquipment} />
  )
}

export default CreateOperatorEquipment