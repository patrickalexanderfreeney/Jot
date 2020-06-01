import React from 'react';
import { Card, CardContainer, Button } from '../styles/styledJotCard';

const JotCard = ({ jot, readJot, deleteJot }) => {
	return (
		<Card>
			<CardContainer>
				<h4>{jot.title}</h4>
				<p>{jot.tags}</p>
				<div>
					<Button onClick={() => deleteJot(jot.id)}>Delete</Button>
					<Button>Edit</Button>
					<Button onClick={() => readJot(jot)}>Read</Button>
				</div>
			</CardContainer>
		</Card>
	);
};

export default JotCard;
