import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContainer } from '../styles/Containers';

const Jot = ({ title, body, tags, jotId }) => {
	return (
		<Card>
			<CardContainer>
				<h4>{title}</h4>
				<p>{tags}</p>
			</CardContainer>
		</Card>
	);
};

export default Jot;
