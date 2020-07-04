import React from 'react';
import CreateOperator from './pages/CreateOperator'
import CreateTechnician from './pages/CreateTechnician'
import CreateOperatorEquipment from './pages/CreateOperatorEquipment'
import CreateTechnicianEquipment from './pages/CreateTechnicianEquipment'
import './App.css';

function App() {
  return (
    <>
      <CreateOperator />
      <br></br>
      <CreateTechnician />
      <br></br>
      <CreateOperatorEquipment />
      <br></br>
      <CreateTechnicianEquipment />
    </>
  )
}

export default App;
