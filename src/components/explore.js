import React, { useEffect } from 'react';
import Footer from './footer';
import Mission from './misson';
import survive from '../images/children.png'
import learn from '../images/download.jpg'
import protect from '../images/images.jpg'
import Navbar from './exploreNav/navbar'
import './explore.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Explore = ({ id }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<React.Fragment>
			<div id={id}>
				<Navbar />
				<div className="explores">
					<div className="home_text">
						<p id="firstLine" data-aos="fade-right">More About Us</p>
						<p id="secondLine" data-aos="fade-left">TOGETHER WE CAN ENSURE THAT EVERY CHILD</p>
						<p id="thirdLine" data-aos="fade-up">SURVIVES, LEARNS AND IS PROTECTED.</p>

					</div>
				</div>
				<div className="row space">
					<div className="col-sm-4" data-aos="fade-up">
						<div className="card cards">
							<img className="card-img-top" src={survive} alt="children" />
							<div className="card-body">
								<h5 className="card-title">SURVIVE</h5>
								<p className="card-text">No child dies from preventable causes before their fifth birthday</p>
							</div>
						</div>
					</div>
					<div className="col-sm-4" data-aos="fade-up">
						<div className="card cards">
							<img className="card-img-top" src={learn} alt="children" />
							<div className="card-body">
								<h5 className="card-title">LEARN</h5>
								<p className="card-text">All children learn from a quality basic education<br /></p>
							</div>
						</div>
					</div>
					<div className="col-sm-4" data-aos="fade-up">
						<div className="card cards">
							<img className="card-img-top" src={protect} alt="children" />
							<div className="card-body">
								<h5 className="card-title">PROTECT</h5>
								<p className="card-text">Violence against children is no longer tolerated</p>
							</div>
						</div>
					</div>
				</div>
				<Mission />
				<Footer />

			</div>

		</React.Fragment>
	);
};

export default Explore;
