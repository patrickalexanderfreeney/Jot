import React from 'react';
import { Card } from '../styles/Containers';
import { Button } from '../styles/Buttons';

const JotCard = ({ jot, readJot, deleteJot, selectJot }) => {
	return (
				<Card>
					<h4>{jot.title}</h4>
					<p>{jot.tags}</p>
						<Button onClick={() => deleteJot(jot.id)}>Delete</Button>
						<Button>Edit</Button>
						<Button onClick={() => selectJot(jot)}>Read</Button>
				</Card>

	);
};

export default JotCard;
