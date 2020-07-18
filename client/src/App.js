// bring in all the react related
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// bring in all the pages

import Login from "./pages/Login";
import Profile from "./pages/Profile";

import CreateRepairRequest from "./pages/CreateRepairRequest";
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
import API from "./utils/API";
// import DisplayRepairWorkOrders from "./pages/DisplayRepairWorkOrders";

function App() {
  const [userState, setUserState] = useState({});

  // check server session for user info when page is opened
  // login the user if logged in before
  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        if (res.data.user) {
          setUserState(res.data.user);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  // Handles updating component state when the user types into the login form
  function handleLogin(data) {
    setUserState(data);
  }


  return (
    <Router>
      <UserContext.Provider value={userState}>
        {/* render login form if not logged in  */}
        {!userState._id && <Login handleLogin={handleLogin} />}
        {/* render the dashbord and other pages if logged in  */}
        {userState._id && (
          <LayoutCanvas>
            <Switch>
              <Route exact path="/">
                {userState.role==='Maintenance Manager' ? <Dashboard /> : <Unauthorized />}
              </Route>
              <Route path="/display-users">
                {(userState.role ==='Operations Manager' || userState.role==='Maintenance Manager') ? <DisplayUsers /> : <Unauthorized />}
              </Route>
              <Route path="/display-vehicles">
                {(userState.role ==='Operations Manager' || userState.role==='Maintenance Manager') ? <DisplayVehicles /> : <Unauthorized />}
              </Route>
              <Route path="/display-repairRequests" component={DisplayRepairRequests}>
                {(userState.role ==='Technician' || userState.role==='Maintenance Manager') ? <DisplayVehicles /> : <Unauthorized />}
              </Route>
              <Route path="/display-repairWorkorders" >
                {(userState.role ==='Technician' || userState.role==='Maintenance Manager') ? <DisplayVehicles /> : <Unauthorized />}
              </Route>
              <Route path="/create-repair-request">
                {userState.role==='Operator' ? <CreateRepairRequest /> : <Unauthorized />}
              </Route>
              <Route path="/create-repairWorkorder">
                {userState.role==='Technician' ? <CreateRepairRequest /> : <Unauthorized />}
              </Route>
              <Route path="/create-user">
                {(userState.role ==='Operations Manager' || userState.role==='Maintenance Manager') ? <CreateUser /> : <Unauthorized />}
              </Route>
              <Route path="/create-vehicle">
                {(userState.role ==='Operations Manager' || userState.role==='Maintenance Manager') ? <CreateVehicle /> : <Unauthorized />}
              </Route>
              <Route path="/profile" component={Profile} />
            </Switch>
          </LayoutCanvas>
        )}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
