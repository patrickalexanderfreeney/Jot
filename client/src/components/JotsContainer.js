import React, { useEffect, useContext } from 'react';
import { PostContext } from './context/store';
import Axios from 'axios';
import JotCard from './JotCard';

export default function JotsContainer(props){
	const [state, dispatch] = useContext(PostContext);

	useEffect(() => {
		getJots();
	}, []);

	const getJots = async () => {
		const config = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.token}`
		};

		try {
			const response = await Axios.get('http://localhost:3000/jots', config);
			const data = await response.data;
			const userJots = data.filter((jot) => jot.user_id == localStorage.id);
			dispatch({ type: 'SETJOTS', payload: userJots });
		} catch (error) {
			console.error(error);
		}
	};
	const editJot = async (jot) => {
		const config = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.token}`
		};

		try {
			const response = await Axios.patch(
				`http://localhost:3000/jots/${jot.id}`,
				config
			);
			const data = await response.data;
			const userJots = data.filter((jot) => jot.user_id == localStorage.id);
			dispatch({ type: 'SETJOTS', payload: userJots });
		} catch (error) {
			console.error(error);
		}
	};
	const deleteJot = async (jotId) => {
		console.log(jotId);
		const config = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.token}`
		};

		try {
			const response = await Axios.delete(
				`http://localhost:3000/jots/${jotId}`,
				config
			);

			dispatch({ type: 'DELETEJOT', jotId });
		} catch (error) {
			console.error(error);
		}
	};
	const readJot = async (jot) => {
		console.log(jot);

		dispatch({ type: 'READJOT', payload: jot });
	};
	const filterJot = async (searchTerm) => {
		console.log(searchTerm);

		dispatch({ type: 'FILTERJOTS', payload: searchTerm });
	};
	const resetJots = async () => {
		getJots();
	};

	console.log(state.jots);
	return (
		<>
				{state.jots.map((jot) => (
					<JotCard
						key={jot.id}
						clickable
						jot={jot}
						deleteJot={deleteJot}
						readJot={readJot}
						selectJot={props.selectJot}
					/>
				))}
		</>
	);
};

