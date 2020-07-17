// bring in all the react related
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// bring in all the pages

import Login from "./pages/Login";

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
import API from "./utils/API";
// import DisplayRepairWorkOrders from "./pages/DisplayRepairWorkOrders";

function App() {
  // TODO: the default state value is suppose be grapped from useEffect
  const [userState, setUserState] = useState({});

  // check server session for user info when page is opened
  // login the user if logged in before
  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        if (res.data.user) {
          setUserState(res.data.user);
        } else
          // if not logged in, lead to log in page
          //waiting for conditional render decision
          console.log("should go to login page-----------------------------------");
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
        <LayoutCanvas>
          {!userState._id && <Login handleLogin={handleLogin} />}

          <Switch>
            {/* conditional render all the page if not authorized to see */}

            <Route path="/display-users" component={DisplayUsers} />
            <Route path="/display-vehicles" component={DisplayVehicles} />
            <Route
              path="/display-repairRequests"
              component={DisplayRepairRequests}
            />
            <Route path="/display-repairWorkorders" />
            {/* create the repairRequest and repaireWorkorders */}
            <Route path="/create-repairRequest" />
            <Route path="/create-repairWorkorder" />

            <Route path="/create-user">
              {userState.isManager ? <CreateUser /> : <Unauthorized />}
            </Route>
            <Route path="/create-vehicle">
              {userState.isManager ? <CreateVehicle /> : <Unauthorized />}
            </Route>
            <Route path="/">
              {true ? <Dashboard /> : <Unauthorized />}
            </Route>
          </Switch>
        </LayoutCanvas>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
