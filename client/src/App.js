// bring in all the react related
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// bring in all the pages


import SignIn from './pages/SignIn'

// import CreateRepairRequest from './pages/CreateRepairRequest'
// import CreateRepairWorkOrder from './pages/CreateRepairWorkOrder'
// bring in all the components
import LayoutCanvas from "./components/LayoutCanvas";
import Unauthorized from "./components/Unauthorized";
// bring in all the global css
import "./App.css";
// bring in all the contexts
import Dashboard from "./components/Dashboard";
import UserContext from "./utils/UserContext";
import CreateUser from "./pages/CreateUser";
import CreateVehicle from "./pages/CreateVehicle";
import DisplayUsers from "./pages/DisplayUsers";
import DisplayVehicles from "./pages/DisplayVehicles";
import DisplayRepairRequests from "./pages/DisplayRepairRequests";
// import DisplayRepairWorkOrders from "./pages/DisplayRepairWorkOrders";

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
      <Switch>
    {/* conditional render all the page if not authorized to see */}

        <Route path="/display-users" component={DisplayUsers} />
        <Route path="/display-vehicles" component={DisplayVehicles} />
        <Route path="/display-repairRequests" component={DisplayRepairRequests} />
        <Route path="/display-repairWorkorders"  />
        {/* create the repairRequest and repaireWorkorders */}
        <Route path="/create-repairRequest" />
        <Route path="/create-repairWorkorder"/>

        <Route path="/create-user">
          {userState.isManager ? <CreateUser/> : <Unauthorized/>}
        </Route>
        <Route path="/create-vehicle">
        {userState.isManager ? <CreateVehicle/> : <Unauthorized/>}
        </Route>
        <Route path="/" >
        {userState.isManager ? <Dashboard/> : <Unauthorized/>}
        </Route>
      </Switch>
      </LayoutCanvas>
      </UserContext.Provider>
    </Router>

  );
}

export default App;
