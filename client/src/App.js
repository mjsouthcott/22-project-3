// bring in all the react related
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// bring in all the pages


import SignIn from './pages/SignIn'

// import CreateRepairRequest from './pages/CreateRepairRequest'
// import CreateRepairWorkOrder from './pages/CreateRepairWorkOrder'
// bring in all the components
import LayoutCanvas from "./components/LayoutCanvas";
import Dashboard from "./components/Dashboard";
import Unauthorized from "./components/Unauthorized";
// bring in all the global css
import "./App.css";
// bring in all the contexts
import UserContext from "./utils/UserContext";
import CreateUser from "./pages/CreateUser";
import CreateVehicle from "./pages/CreateVehicle";
import DisplayUsers from "./pages/DisplayUsers";
import DisplayVehicles from "./pages/DisplayVehicles";
import DisplayRepairRequests from "./pages/DisplayRepairRequests";

function App() {
  // TODO: the default state value is suppose be grapped from useEffect
  const [userState, setUserState] = useState({
    isManager: true,
    role: "Operations Manager",
    rank: "",
    firstName: "",
    lastName: "",
    occupation: "",
    available: false,
    mounted: true,
    username: "",
    password: "",
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

    <>
      {/* <DisplayUsers />
      <br></br>
      <DisplayVehicles />
      <br></br>
      <CreateUser />
      <br></br>
      <CreateVehicle />
      <br></br> */}
      <DisplayRepairRequests />
    </>
    // <Router>
    //   <UserContext.Provider value={userState}>
    //   <LayoutCanvas>
    //   <Switch>
    // {/* conditional render all the page if not authorized to see */}


    //     <Route path="/display-operator" component={DisplayOperators} />
    //     <Route path="/display-operatorVehicles" component={DisplayOperatorVehicles} />
    //     <Route path="/display-technicians" component={DisplayTechnicians} />
    //     <Route path="/display-technicianVehicles" component={DisplayTechnicianVehicles} />
    //     <Route path="/repair-request"/>
    //     <Route path="/repair-workorder"/>

    //     <Route path="/create-operator">
    //       {userState.isManager ? <CreateOperator/> : <Unauthorized/>}
    //     </Route>
    //     <Route path="/create-technician">
    //     {userState.isManager ? <CreateTechnician/> : <Unauthorized/>}
    //     </Route>
    //     <Route path="/create-operatorVehicle">
    //     {userState.isManager ? <CreateOperatorVehicle/> : <Unauthorized/>}
    //     </Route>
    //     <Route path="/create-technicianVehicle">
    //     {userState.isManager ? <CreateTechnicianVehicle/> : <Unauthorized/>}
    //     </Route>
    //     <Route path="/" >
    //     {userState.isManager ? <Dashboard/> : <Unauthorized/>}
    //     </Route>
    //   </Switch>
    //   </LayoutCanvas>
    //   </UserContext.Provider>
    // </Router>
  );
}

export default App;
