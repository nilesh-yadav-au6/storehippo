import React from 'react';
import './App.css';
import { Switch ,Route } from "react-router-dom"

import Navbar from  "./components/NavBar"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import Marketing from "./components/Marketing"
import Orders from "./components/Orders"
import Users from "./components/Users"
import Sites from "./components/Sites"
import AdvanceSetting from "./components/AdvanceSetting"
import Logs from "./components/Logs"
import Reports from "./components/Reports"

function App() {
  return (
    <div className="App">
        <Navbar />
        <div>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/marketing" component={Marketing} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/sites" component={Sites} />
            <Route exact path="/advancesetting" component={AdvanceSetting} />
            <Route exact path="/logs" component={Logs} />
            <Route exact path="/reports" component={Reports} />
        </Switch>
        </div>

    </div>
  );
}

export default App;
