// bring in all the react related 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// bring in all the pages 

import SignIn from './pages/SignIn'
import CreateOperator from './pages/CreateOperator'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnician from './pages/CreateTechnician'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
// import CreateRepairRequest from './pages/CreateRepairRequest'
// import CreateRepairWorkOrder from './pages/CreateRepairWorkOrder'
import DisplayOperators from './pages/DisplayOperators'
import DisplayOperatorVehicles from './pages/DisplayOperatorVehicles'
import DisplayTechnicians from './pages/DisplayTechnicians'
import DisplayTechnicianVehicles from './pages/DisplayTechnicianVehicles'
// bring in all the components
import LayoutCanvas from './components/LayoutCanvas';
import Dashboard from './components/Dashboard'
import Unauthorized from './components/Unauthorized'
// bring in all the global css
import './App.css';
// bring in all the contexts
import UserContext from './utils/UserContext'


function App() {

  // TODO: the default state value is suppose be grapped from useEffect 
  const [userState, setUserState] = useState({
    isManager : true,
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
//   useEffect(() => {setUserState()}, []); 


  return (
      <Router>
         
        <UserContext.Provider value={userState}>
        <LayoutCanvas>
        <SignIn />
        <Switch>
          {/* conditional render all the page if not authorized to see */}

          <Route path="/display-operator" component={DisplayOperators} />
          <Route path="/display-operatorVehicles" component={DisplayOperatorVehicles} />
          <Route path="/display-technicians" component={DisplayTechnicians} />
          <Route path="/display-technicianVehicles" component={DisplayTechnicianVehicles} />
          <Route path="/repair-request"/>
          <Route path="/repair-workorder"/>

          <Route path="/create-operator">
            {userState.isManager ? <CreateOperator/> : <Unauthorized/>}
          </Route>
          <Route path="/create-technician">
          {userState.isManager ? <CreateTechnician/> : <Unauthorized/>}
          </Route>
          <Route path="/create-operatorVehicle">
          {userState.isManager ? <CreateOperatorVehicle/> : <Unauthorized/>}
          </Route>
          <Route path="/create-technicianVehicle">
          {userState.isManager ? <CreateTechnicianVehicle/> : <Unauthorized/>}
          </Route>
          <Route path="/" >
          {userState.isManager ? <Dashboard/> : <Unauthorized/>}
          </Route>
        </Switch> 
        </LayoutCanvas>
        </UserContext.Provider>
      </Router>
  )
}

export default App;
