import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-scroll';

const Nav = styled.nav`
	/* width: 100%;  */
	 height: 64px;
	/* border-bottom: 2px solid #f1f1f1; */
	padding: 2px 20px 4px;
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	justify-content: space-between;
	z-index: 200;
	background-color: white;
	.logo p {
		padding: 15px 0;
		font-size:large;
		cursor: pointer;
		color: #555;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<div className="logo">
				<Link to="/">
					<p>CYCO-YOUTH AND CHILD PROTECTION</p>
				</Link>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
