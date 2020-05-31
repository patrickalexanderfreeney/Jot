import React from 'react';
import NavBar from '../components/Navbar';
import { Section, Header, Title } from '../styles/StyledLanding';

const Landing = () => {
	return (
		<Section>
			<NavBar />
			<Header>
				<Title>Welcome To Jot..</Title>
				<Title>A place for your thoughts.</Title>
			</Header>
		</Section>
	);
};

export default Landing;
