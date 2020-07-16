import Axios from 'axios';

export const fetchJots = async () => {
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
