import React, { useState, useEffect } from 'react';
import CreateOperator from './pages/CreateOperator'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnician from './pages/CreateTechnician'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
import CreateRepairRequestForm from './components/CreateRepairRequestForm/index'
import CreateRepairWorkOrderForm from './components/CreateRepairWorkOrderForm/index'
import Dashboard from './components/Dashboard'

import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';

import UserContext from './utils/UserContext'


function App() {

  // TODO: the default state value is suppose be grapped from useEffect 
  const [userState, setUserState] = useState({
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


  return (
    <>
      <Router>
        <UserContext.Provider value={userState}>
        <Navigation>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/repair-request" component={CreateRepairRequestForm} />
        <Route exact path="/repair-workorder" component={CreateRepairWorkOrderForm} />
        <Route exact path="/create-operator" component={CreateOperator} />
        <Route exact path="/create-technician" component={CreateTechnician} />
        <Route exact path="/create-operatorVehicle" component={CreateOperatorVehicle} />
        <Route exact path="/create-technicianVehicle" component={CreateTechnicianVehicle} />
        </Navigation>
        </UserContext.Provider>
      </Router>

    </>
  )
}

export default App;
