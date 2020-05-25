import React, { useContext } from 'react';
import { PostContext } from './context/store';
import { Card, CardContainer, Button } from '../styles/Containers';

const JotCard = ({ title, tags, jotId }) => {
	const [state, dispatch] = useContext(PostContext);

	return (
		<Card>
			<CardContainer>
				<h4>{title}</h4>
				<p>{tags}</p>
				<Button
					onClick={() => {
						dispatch({ type: 'DELETEJOT', payload: jotId });
					}}
				>
					X
				</Button>
			</CardContainer>
		</Card>
	);
};

export default JotCard;
