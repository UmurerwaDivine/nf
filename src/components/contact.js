
import React, { useEffect } from 'react';
import "./contact.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './footer';
const Contact = props => {
  const { id } = props
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <React.Fragment>
      <div className="container-fluid contact" id={id}>

      </div>
      <Footer />
    </React.Fragment>
  )

}

export default Contact;
