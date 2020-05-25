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
	}, [state.jots]);

	const getJots = async () => {
		const config = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.token}`
		};

		try {
			const response = await Axios.get('http://localhost:3000/jots', config);
			const data = await response.data;
			console.log(data);
			const userJots = data.filter((jot) => jot.user_id == localStorage.id);
			console.log(userJots);
			dispatch({ type: 'SETJOTS', payload: userJots });
			console.log(state.jots);
		} catch (error) {
			console.error(error);
		}
	};
	const deleteJot = async () => {
		const config = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.token}`
		};

		try {
			const response = await Axios.delete('http://localhost:3000/jots', config);
			const data = await response.data;
			console.log(data);
			const userJots = data.filter((jot) => jot.user_id == localStorage.id);
			console.log(userJots);
			dispatch({ type: 'SETJOTS', payload: userJots });
			console.log(state.jots);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<SearchBar />
			<JotList>
				{state.jots.map((jot) => (
					<JotCard
						key={jot.id}
						clickable
						title={jot.title}
						body={jot.body}
						tags={jot.tags}
						jotId={jot.id}
					/>
				))}
			</JotList>
		</>
	);
};

export default JotsContainer;
