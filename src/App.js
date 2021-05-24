import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/pages/explore";
import LandingPage from "./components/pages/landingpage";
// import Home from './components/home';
import Services from "./components/pages/services";
import Client from "./components/pages/client";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/explore" component={Explore} />
            <Route path="/home" component={LandingPage} />
            <Route path="/services" component={Services} />
            <Route path="/client" component={Client} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
};

export default App;
