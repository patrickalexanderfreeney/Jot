import React from 'react';
import { Section, Header, Title, Button } from '../styles/StyledLanding';

const Landing = () => {
	return (
		<Section>
			<Header>
				<Title>Welcome To Jot..</Title>
				<Title>A place for your thoughts.</Title>
				<Button>Log In to get Started</Button>
			</Header>
		</Section>
	);
};

export default Landing;
