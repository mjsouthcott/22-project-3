import React, { useState, useEffect } from 'react';
import CreateOperator from './pages/CreateOperator'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnician from './pages/CreateTechnician'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
import CreateRepairRequestForm from './components/CreateRepairRequestForm/index'
import CreateRepairWorkOrderForm from './components/CreateRepairWorkOrderForm/index'
import Dashboard from './components/Dashboard'

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';

import UserContext from './utils/UserContext'


function App() {

  // TODO: the default state value is suppose be grapped from useEffect 
  const [userState, setUserState] = useState({
    isManager : false,
    role: 'Operations Manager',
    rank: '',
    firstName: '',
    lastName: '',
    occupation: '',
    available: false,
    mounted: true,
    username: '',
    password: '',
  });


// // TODO: Logic of Passport JS goes in here
//   useEffect(() => {
//     setUserState({
//       role: 'Operations Manager',
//       rank: 'Captain',
//       firstName: 'Max',
//       lastName: 'Guo',
//       occupation: 'Armoured Officer',
//       available: false,
//       mounted: true,
//       username: 'maxguo',
//       password: 'password',
//     })
//   }, []); 
const unauthorized = <div>You are not allowed to view this buddy! </div>
  return (
      <Router>
        <UserContext.Provider value={userState}>
        <Navigation>
        <Switch>
          <Route path="/repair-request" component={CreateRepairRequestForm} />
          <Route path="/repair-workorder" component={CreateRepairWorkOrderForm} />
          <Route path="/create-operator" >
            {userState.isManager ? <CreateOperator/> : unauthorized}
          </Route>
          <Route path="/create-technician" component={CreateTechnician} />
          <Route path="/create-operatorVehicle" component={CreateOperatorVehicle} />
          <Route path="/create-technicianVehicle" component={CreateTechnicianVehicle} />
          <Route path="/" component={Dashboard} />
        </Switch> 
        </Navigation>
        </UserContext.Provider>
      </Router>
  )
}

export default App;
