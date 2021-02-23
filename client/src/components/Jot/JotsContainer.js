import React, { useEffect, useContext } from 'react';
import { PostContext } from '../context/store';
import Axios from 'axios';
import JotCard from './JotCard';
import { Grid } from '@material-ui/core'

export default function JotsContainer(props){
	const [state, dispatch] = useContext(PostContext);

	const config = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.token}`
	};
	
	useEffect(() => {
		(async function() {
			
			try {
				const response = await Axios.get('http://localhost:3000/jots', config);
				const data = await response.data;
				const userJots = data.filter((jot) => jot.user_id.toString() === localStorage.id);

				if (userJots){
				dispatch({ type: 'SETJOTS', payload: userJots });
				}
			} catch (error) {
				console.error(error);
			}
		})();
	}, [config, dispatch]);

	
	// const editJot = async (jot) => {
	// 	const config = {
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Bearer ${localStorage.token}`
	// 	};

	// 	try {
	// 		const response = await Axios.patch(
	// 			`http://localhost:3000/jots/${jot.id}`,
	// 			config
	// 		);
	// 		const data = await response.data;
	// 		const userJots = data.filter((jot) => jot.user_id == localStorage.id);
	// 		dispatch({ type: 'SETJOTS', payload: userJots });
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	const deleteJot = async (jotId) => {
			
		(async () => {
			try {
				await Axios.delete(
					`http://localhost:3000/jots/${jotId}`,
					config
				);
				dispatch({ type: 'DELETEJOT', jotId });
			} catch (error) {
				console.error(error);
			}
		})();
	};
	
	const readJot = async (jot) => {
		dispatch({ type: 'READJOT', payload: jot });
	};
	
	
	
	return (
		<>
				{state.jots.map((jot) => (
					<Grid item xs={12} sm={6} mg={4} lg={3} >
					<JotCard
						key={jot.id}
						clickable
						jot={jot}
						deleteJot={deleteJot}
						readJot={readJot}
						selectJot={props.selectJot}
					/>
					</Grid>
				))}
		</>
	);
};

