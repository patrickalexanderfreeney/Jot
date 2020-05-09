import React, { useContext } from 'react';
import { Nav, LogoImg, Button } from '../styles/NavBar';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';
import { StoreContext } from './store';

const NavBar = (props) => {
	const [dispatch] = useContext(StoreContext);

	return (
		<>
			<Nav>
				<LogoImg src={LogoSrc}></LogoImg>
				<Button onClick={() => dispatch({ type: 'LOGOUT' })}>Log out</Button>
			</Nav>
		</>
	);
};

export default NavBar;
