import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, LogoImg, Button } from '../styles/NavBar';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';

const NavBar = (props) => {
	const history = useHistory();

	const logOut = () => {
		localStorage.clear();
		history.push('/login');
	};

	return (
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
	);
};

export default NavBar;
