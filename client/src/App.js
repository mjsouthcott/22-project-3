import React from 'react';
import CreateOperator from './pages/CreateOperator'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnician from './pages/CreateTechnician'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
import DisplayOperators from './pages/DisplayOperators'
import DisplayTechnicians from './pages/DisplayTechnicians'
import DisplayOperatorVehicles from './pages/DisplayOperatorVehicles'
import DisplayTechnicianVehicles from './pages/DisplayTechnicianVehicles'
import CreateRepairRequestForm from './components/CreateRepairRequestForm/index'
import CreateRepairWorkOrderForm from './components/CreateRepairWorkOrderForm/index'
// import Dashboard from './components/Dashboard'
import './App.css';

import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

function App() {
  return (
    <>
      {/* <AssignOperatorVehicleOccupantInput /> */}
      {/* <CreateOperator />
      <br></br>
      <CreateOperatorVehicle />
      <br></br>
      <CreateTechnician />
      <br></br>
      <CreateTechnicianVehicle />
      <br></br>
      <DisplayOperators />
      <br></br>
      <DisplayTechnicians />
      <br></br> */}
      <DisplayOperatorVehicles />
      <br></br>
      <DisplayTechnicianVehicles />
      {/* <br></br>
      <CreateRepairRequestForm />
      <br></br>
      <CreateRepairWorkOrderForm />
      <br></br> */}
      {/* <Dashboard/> */}
    </>
  )
}

export default App;
