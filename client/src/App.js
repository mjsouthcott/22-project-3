import React from 'react';
import RepairWorkOrderForm from './components/RepairWorkOrderForm/index'
import RepairRequestForm from './components/RepairRequestForm/index'
import CreateOperator from './pages/CreateOperator'
import CreateTechnician from './pages/CreateTechnician'
import CreateOperatorVehicle from './pages/CreateOperatorVehicle'
import CreateTechnicianVehicle from './pages/CreateTechnicianVehicle'
import VehicleAvatar from './components/VehicleAvatar/index'
import Dashboard from './components/Dashboard'
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';


function App() {


  return (
    <>
      <Router>
        <Navigation>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/repair-request" component={RepairRequestForm} />
        <Route exact path="/repair-workorder" component={RepairWorkOrderForm} />
        <Route exact path="/create-operator" component={CreateOperator} />
        <Route exact path="/create-technician" component={CreateTechnician} />
        <Route exact path="/create-operatorVehicle" component={CreateOperatorVehicle} />
        <Route exact path="/create-technicianVehicle" component={CreateTechnicianVehicle} />
        </Navigation>
      </Router>
    </>
  )
}

export default App;
