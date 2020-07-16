import Axios from 'axios';

export const fetchJots = async () => {
	const config = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.token}`
	};

	const response = await Axios.get('http://localhost:3000/jots', config);

	return {
		type: 'FETCH_JOTS',
		payload: response
	};
};
export const selectJot = (jot) => {
	return {
		type: 'SELECTED_JOT',
		payload: jot
	};
};
