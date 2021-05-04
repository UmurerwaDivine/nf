import React, { useEffect } from 'react';
import "./home.css";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = props => {
  const { id } = props

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div className="home" id={id}>
      <div className="home_text">
        <p id="firstLine">Child and Youth Care organization</p>
        <p id="secondLine">What we believe, What we'll do,</p>
        <p id="thirdLine">Survive, Learn, Be protected.</p>
      </div>
    </div>


  )
}

export default Home;