import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Assets/Components/Login"
import Home from "./Assets/Components/Home"
import Launches from "./Assets/Components/Launches"
import Rockets from "./Assets/Components/Rockets"
import Dragons from "./Assets/Components/Dragons"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename="spacexapp">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/launches" component={Launches} />
        <Route path="/rockets" component={Rockets} />
        <Route path="/dragons" component={Dragons} />
      </Switch>
    </Router>
  );
}

export default App;
