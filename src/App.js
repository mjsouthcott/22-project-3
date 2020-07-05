import React from 'react';
import CreateOperator from './pages/CreateOperator'
import CreateTechnician from './pages/CreateTechnician'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
import './App.css';

function App() {
  return (
    <>
      <CreateOperator />
      <br></br>
      <CreateTechnician />
      <br></br>
      <CreateOperatorVehicle />
      <br></br>
      <CreateTechnicianVehicle />
    </>
  )
}

export default App;
