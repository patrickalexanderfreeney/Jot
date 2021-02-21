import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import LogoSrc from '../styles/mediaAssets/jot-logo.ico';

const NavBar = (props) => {
	const history = useHistory();
	const token = localStorage.token;

	const logOut = () => {
		localStorage.clear();
		history.push('/');
	};

	return token ? (
		<>
			<Nav>
				<LogoImg src={LogoSrc}></LogoImg>
				<Wrapper>
					<Button
						onClick={() => {
							logOut();
						}}
					>
						Log out
					</Button>
				</Wrapper>
			</Nav>
		</>
	) : (
		<Nav>
			<Link to='/'>
				<LogoImg src={LogoSrc}></LogoImg>
			</Link>
			<Wrapper>
				<Button
					onClick={() => {
						history.push('/login');
					}}
				>
					Log In
				</Button>
				<Button
					onClick={() => {
						history.push('/signup');
					}}
				>
					Sign Up
				</Button>
			</Wrapper>
		</Nav>
	);
};

export default NavBar;
