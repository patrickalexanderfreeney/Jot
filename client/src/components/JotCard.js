import React from 'react';
import { Card, CardContainer, Button } from '../styles/styledJotCard';

const JotCard = ({ title, tags, jotId, deleteJot }) => {
	return (
		<Card>
			<CardContainer>
				<h4>{title}</h4>
				<p>{tags}</p>
				<div>
					<Button onClick={() => deleteJot(jotId)}>Delete</Button>
					<Button>Edit</Button>
					<Button>Read</Button>
				</div>
			</CardContainer>
		</Card>
	);
};

export default JotCard;
