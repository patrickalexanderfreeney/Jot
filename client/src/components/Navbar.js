import React from 'react';
import { Redirect } from 'react-router-dom';
import { Nav, LogoImg, Button } from '../styles/NavBar';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';
import { useAuthDataContext } from '../contexts/auth';

const NavBar = (props) => {
	const { user, onLogout } = useAuthDataContext();
	return (
		<>
			<Nav>
				<LogoImg src={LogoSrc}></LogoImg>
				<Button onClick={onLogout}>Log out</Button>
			</Nav>
		</>
	);
};

export default NavBar;
