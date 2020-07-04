import React from 'react';
import EquipmentForm from '../components/EquipmentForm/index'

import technicianEquipment from '../utils/technicianEquipment'

function CreateTechnicianEquipment () {
  return (
    <EquipmentForm formTitle={'Create Technician Equipment'} types={technicianEquipment} />
  )
}

export default CreateTechnicianEquipment