import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import components
import Navbar from "./component/Navbar";
import Tourlist from "./component/tourlist/Tourlist";
import Home from  './component/Home'
import About from  './component/About'
import Error from  './component/Error'

import "./App.scss";
const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/tours' component={Tourlist}/>
          <Route path='/about' component={About}/>
          <Route path='*' component={Error}/>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
