import React, { Fragment } from 'react';
// import Navigation from "./navigation";
import NavBar from './homeNav/navbar'
import Home from "./home";
import Services from "./services";
import Client from './client';
import About from "./about";
import Contact from "./contact";


const LandingPage = () => {
  return (
    <Fragment>
      <NavBar />
      {/* <Navigation id="section1" /> */}
      <Home id="section1" />
      <About id="section3" />
      <Services id="section2" />
      <Client id="section4" />
      <Contact id="section5" />
    </Fragment>
  )
}

export default LandingPage;
