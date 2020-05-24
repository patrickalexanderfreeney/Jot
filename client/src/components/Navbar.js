import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Nav, LogoImg, Button } from '../styles/NavBar';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';

const NavBar = (props) => {
	const history = useHistory();
	const token = localStorage.token;

	const logOut = () => {
		localStorage.clear();
		history.push('/login');
	};

	return token ? (
		<>
			<Nav>
				<LogoImg src={LogoSrc}></LogoImg>
				<Button
					onClick={() => {
						logOut();
					}}
				>
					Log out
				</Button>
			</Nav>
		</>
	) : (
		<Nav>
			<LogoImg src={LogoSrc}></LogoImg>
			<Button>Log In</Button>
			<Button>
				<Link to='/signup'>Don't have an account?</Link>
			</Button>
		</Nav>
	);
};

export default NavBar;
