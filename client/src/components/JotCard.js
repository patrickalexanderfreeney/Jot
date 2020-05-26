import React, { useContext } from 'react';
// import { PostContext } from './context/store';
import { Card, CardContainer, Button } from '../styles/Containers';

const JotCard = ({ title, tags, jotId, deleteJot }) => {
	return (
		<Card>
			<CardContainer>
				<h4>{title}</h4>
				<p>{tags}</p>
				<Button onClick={() => deleteJot(jotId)}>X</Button>
			</CardContainer>
		</Card>
	);
};

export default JotCard;
