import React, { createContext, useReducer } from 'react';

export const PostContext = createContext({});

const initialState = {
	jots: [],
	filteredJots: [],
	searchTerm: false
};

function reducer(state, action) {
	switch (action.type) {
		case 'SETJOTS':
			return {
				...state
			};
		case 'ADDJOT':
			return {
				...state,
				jots: [action.payload, ...state.jots]
			};
		case 'RESETJOTS':
			return {
				...state,
				jots: [state.jots],
				filteredJots: [],
				searchTerm: false
			};

		case 'SHOWJOT':
			return {
				...state
			};

		case 'EDITJOT':
			return {
				...state
			};

		case 'DELETEJOT':
			return {
				...state,
				jots: state.jots.filter((jot) => jot.id !== action.jotId)
			};
		case 'FILTERJOTS':
			return {
				...state,
				jots: state.jots.filter((jot) => {
					jot.title.toLowerCase().includes(action.searchTerm.toLowerCase()) ||
						jot.tags.toLowerCase().includes(action.searchTerm.toLowerCase());
				}),
				searchTerm: true
			};

		default:
			return state;
	}
}

const PostStore = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<PostContext.Provider value={[state, dispatch]}>
			{children}
		</PostContext.Provider>
	);
};

export default PostStore;
