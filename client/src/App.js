import React from 'react';
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

function App () {
  return (
    <>
      <Router>
        <Navigation>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/repair-request" component={CreateRepairRequestForm} />
        <Route exact path="/repair-workorder" component={CreateRepairWorkOrderForm} />
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
