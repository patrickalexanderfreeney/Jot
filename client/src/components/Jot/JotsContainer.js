import React, { useEffect, useContext } from 'react';
import { jotContext } from '../context/jotStore';
import Axios from 'axios';
import JotCard from './JotCard';
import { div } from '@material-ui/core'

const JotsContainer = (props) => {
	const [ state, dispatch ] = useContext(jotContext);

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
					<div item 
					style={{maxWidth:'35%'}}
					// xs={12} sm={4} 
					>
					<JotCard
						key={jot.id}
						clickable
						jot={jot}
						deleteJot={deleteJot}
						readJot={readJot}
						selectJot={props.selectJot}
					/>
					</div>
				))}
		</>
	);
};
export default JotsContainer;
