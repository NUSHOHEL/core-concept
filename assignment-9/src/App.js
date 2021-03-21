import React, { createContext, useState } from 'react'
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Login from './Components/Identifier/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext= createContext();

function App() {
  const [loggedinuser, setloggedinuser]= useState({});
  return (
    <UserContext.Provider value={[loggedinuser, setloggedinuser]}>
    <Router >
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <PrivateRoute path='/destination/:vehicleType'>
          <Destination/>
        </PrivateRoute>
        <Route path='/login'>
          <Login/>
          </Route> 
            

      </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
