import React from 'react';
import CreateOperator from './pages/CreateOperator'
import CreateTechnician from './pages/CreateTechnician'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
import VehicleAvatar from './components/VehicleAvatar/index'
import './App.css';

import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'

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
      <br></br>
      {/* <List>
        <ListItem>
          <ListItemAvatar>
            <VehicleAvatar backgroundColor='red' icon='assets/images/medium-logistic-vehicle-cargo.png' type='Medium Logistic Vehicle' imageWidth={80} />
          </ListItemAvatar>
          <ListItemText>
          </ListItemText>
        </ListItem>
      </List>
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/armoured-engineering-vehicle.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/armoured-patrol-vehicle.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/heavy-logistic-vehicle-refueller.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/heavy-logistic-vehicle-tank-transporter.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/main-battle-tank.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br>
      <VehicleAvatar backgroundColor='red' icon='assets/images/infantry-fighting-vehicle.png' type='Medium Logistic Vehicle' imageWidth={80} />
      <br></br> */}
    </>
  )
}

export default App;
