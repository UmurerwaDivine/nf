import React, { useEffect } from 'react';
import './services.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Services = (props) => {
	const { id } = props;
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="services" id={id}>

			<div data-aos="fade-left" className="title">

				<p>
					Ntwari Foundation works <br />
					exclusively to improve the resilience <br />
					and wellbeing of children living <br />
					with violence and armed conflict
					</p>
			</div>
		</div>
	);
};

export default Services;
