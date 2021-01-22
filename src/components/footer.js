import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import "./footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
   return (
      <React.Fragment>
         <div className="footer">
            <div className="column1">
               <p>CHILD AND YOUTH CARE ORGANIZATION</p>
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
               <p id="text1"><a href="mailto:bisetsa.kimu@gmail.com">bisetsa.kimu@gmail.com</a></p>
               <p id="text1">+1 (206) 304-2345</p>
               <p id="text1">14729 Ne 8th street Bellevue wa 98007</p>


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