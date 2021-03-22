import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-scroll';

const Nav = styled.nav`
	width: 100%; 
	 height: 64px;
	/* border-bottom: 2px solid #f1f1f1; */
	padding: 2px 20px 4px;
	display: flex;
	/* position: fixed; */
	justify-content: space-between;
	z-index: 200;
	background-color: white;
	.logo p {
		padding: 5% 0;
		font-size:large;
		cursor: pointer;
		color: #555;
	}
	@media only screen and (max-width: 500px){
		.logo p{
content:'CYCO';
		font-size:small;
		cursor: pointer;
		color: #555;

		}
		padding: 2px 20px 4px;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<div className="logo">
				<Link to="/">
					<p>CHILD AND YOUTH CARE ORGANIZATION</p>
				</Link>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
