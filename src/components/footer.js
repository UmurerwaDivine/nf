import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import "./footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
   return (
      <React.Fragment>
         <div className="footer">
            <div className="column1">
               <p>NTWARI FOUNDATION</p>
            </div>

            <div className="column2">
               <h6>ABOUT US</h6>
               <p id="text1">Who we are</p>
               <p id="text1">Our Mission & Vision</p>

            </div>

            <div className="column3">
               <h6>OUR WORK</h6>
               <p id="text1">Overview</p>
               <p id="text1">Up coming events</p>

            </div>

            <div className="column4 ">
               <h6>KEEP UP WITH US</h6>
               <p id="text1">ntwari.foundation@gmail.com</p>
               <p id="text1">+(250)785846496</p>
               <p id="text1">Washington, Seattle</p>


               <div className='socialMedia'>
                  <Link to=""><FaFacebookF id="fb" /></Link>
                  <Link to=""><FaTwitter id="fb" /></Link>
                  <Link to=""><FaInstagram id="fb" /></Link>
               </div>
            </div>
         </div>
         <div className="copy">
            <div className="line">

            </div>

            <p> &copy; 2020 Copyright , All rights reserved.</p>

         </div>

      </React.Fragment>
   )
}

export default Footer;