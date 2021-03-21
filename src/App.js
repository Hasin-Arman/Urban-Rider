
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import TransportDetails from './components/TransportDetails/TransportDetails';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignIn from './components/SignIn/SignIn';
import TransportDetailsResult from './components/TransportDetailsResult/TransportDetailsResult';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext=createContext();

function App() {
const[loggedInUser,setLoggedInUser]=useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <TransportDetailsResult/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
         
          <Route path="/signin">
            <SignIn/>
          </Route>
          <PrivateRoute path="/transport/:transportId">
            <TransportDetails/>
          </PrivateRoute>
        <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
