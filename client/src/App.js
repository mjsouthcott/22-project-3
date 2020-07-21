// bring in all the react related
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// bring in all the pages

import Login from "./pages/Login";
import Profile from "./pages/Profile";

import CreateRepairRequest from "./pages/CreateRepairRequest";
import CreateRepairWorkOrder from "./pages/CreateRepairWorkOrder";
// bring in all the components
import LayoutCanvas from "./components/LayoutCanvas";
import Unauthorized from "./components/Unauthorized";
import WelcomeAlbum from "./components/WelcomeAlbum";
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
// import DisplayRepairRequests from "./pages/DisplayRepairWorkOrders";
import API from "./utils/API";
// import DisplayRepairWorkOrders from "./pages/DisplayRepairWorkOrders";

function App() {
  const [userState, setUserState] = useState({
    user:{},
    display:{ 
      Login: "no",
      Routs: "no" 
    }
  });


  // check server session for user info when page is opened
  // login the user if logged in before
  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        if (res.data.user) {
          setUserState({
            user: res.data.user,
            display: {
              Login: "no",
              Routs: "yes"
            }
          })
        } else{
          setUserState({
            user: {},
            display: {
              Login: "yes",
              Routs: "no"
            }
          })
        }
        
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  // Handles updating component state when the user types into the login form
  function handleLogin(data) {
    setUserState({
      user: data,
      display: {
        Login: "no",
        Routs: "yes"
      }
    })
  }

  return (
    <Router>
      <UserContext.Provider value={userState.user}>
        {/* render login form if not logged in  */}
        {userState.display.Login == "yes" && <Login handleLogin={handleLogin} />}
        {/* render the dashbord and other pages if logged in  */}
        {userState.display.Routs == "yes"&& (
          <LayoutCanvas>
            <Switch>
              <Route exact path="/" component={WelcomeAlbum} />
              <Route exact path="/dashboard">
                {userState.user.role === "Maintenance Manager" ? (
                  <Dashboard />
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/display-users">
                {userState.user.role === "Operations Manager" ||
                userState.user.role === "Maintenance Manager" ? (
                  <DisplayUsers />
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/display-vehicles">
                {userState.user.role === "Operations Manager" ||
                userState.user.role === "Maintenance Manager" ? (
                  <DisplayVehicles />
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/display-repairRequests">
                {userState.user.role !== "Operations Manager" ? (
                  <DisplayRepairRequests />
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/display-repairWorkorders">
                {userState.user.role === "Technician" ||
                userState.user.role === "Maintenance Manager" ? (
                  <></>
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/create-repair-request">
                {userState.user.role === "Operator" ? (
                  <CreateRepairRequest />
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/create-repairWorkorder">
                {userState.user.role === "Technician" ? (
                  <CreateRepairWorkOrder />
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/create-user">
                {userState.user.role === "Operations Manager" ||
                userState.user.role === "Maintenance Manager" ? (
                  <CreateUser />
                ) : (
                  <Unauthorized />
                )}
              </Route>
              <Route path="/create-vehicle">
                {userState.user.role === "Operations Manager" ||
                userState.user.role === "Maintenance Manager" ? (
                  <CreateVehicle />
                ) : (
                  <Unauthorized />
                )}
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
