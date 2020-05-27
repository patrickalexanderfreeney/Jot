import React, { useEffect, useContext } from 'react';
import { PostContext } from './context/store';
import Axios from 'axios';
import JotCard from './JotCard';
import SearchBar from './SearchBar';
import { JotList } from '../styles/Containers';

const JotsContainer = (props) => {
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
	const filterJot = async (searchTerm) => {
		console.log(searchTerm);

		dispatch({ type: 'FILTERJOTS', searchTerm });
	};
	const resetJots = async () => {
		dispatch({ type: 'RESETJOTS' });
	};

	let jots;
	// = state.searchTerm ? state.filteredJots : state.jots;
	if (state.searchTerm == 'true') {
		jots = state.filteredJots;
	} else {
		jots = state.jots;
	}
	console.log(jots);
	return (
		<>
			<SearchBar resetJots={resetJots} filterJot={filterJot} />
			<JotList>
				{jots.map((jot) => (
					<JotCard
						key={jot.id}
						clickable
						title={jot.title}
						body={jot.body}
						tags={jot.tags}
						jotId={jot.id}
						deleteJot={deleteJot}
					/>
				))}
			</JotList>
		</>
	);
};

export default JotsContainer;
