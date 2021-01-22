import React, { useEffect } from 'react';
import "./about.css";
import cyco from '../images/cyco.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const About = props => {
  const { id } = props
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <React.Fragment>
      {/* // <div className="container-fluid"> */}
      <div className="container-fluid about" id={id}>

        <div className="row content">

          <div data-aos="fade-right" className="col-sm-6 upgrade">
            <img className="image" src={cyco} alt="children" />

          </div>

          <div className="col-sm-6">
            <p id="heading" data-aos="fade-down">WHO WE ARE</p>

            <div data-aos="fade-up" className="paragraph">

              <p>Child and Youth Care Organization is a non-governmental Organization<br />
              does whatever it takes every day <br />

              and in times of crisis to give children

                a healthy start in life,<br />

               the opportunity to learn and protection from harm.
      </p>
              <p>When crisis strikes and children are most vulnerable,<br />
       we are always among the first to respond<br />
and the last to leave.</p>

            </div>
            <Link to="/explore">
              <button data-aos="fade-up" className="btn">
                Learn More
            </button>
            </Link>
          </div>


        </div>

      </div>

      {/* // </div> */}
    </React.Fragment>


  )
}

export default About;