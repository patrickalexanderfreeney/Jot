import React, { useEffect, useState, useContext } from 'react';
import { PostContext } from './context/store';
import Axios from 'axios';
import Jot from './Jot';
import SearchBar from './SearchBar';
import { JotList } from '../styles/Containers';

const JotsContainer = (props) => {
	const [state, dispatch] = useContext(PostContext);
	const [jots, setJots] = useState([]);

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
			console.log(data);
			const userJots = data.filter((jot) => jot.user_id == localStorage.id);
			console.log(userJots);
			setJots(userJots);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<SearchBar />
			<JotList>
				{jots.map((jot) => (
					<Jot
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
