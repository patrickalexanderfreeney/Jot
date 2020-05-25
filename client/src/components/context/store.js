import React, { createContext, useReducer } from 'react';

export const PostContext = createContext({});

const initialState = {
	jots: []
	// editJot: [],
	// displayJots: [],
	// showJot: []
};

function reducer(state, action) {
	switch (action.type) {
		case 'SETJOTS':
			return {
				...state,
				jots: action.payload,
				isLoading: true
			};
		case 'ADDJOT':
			return {
				...state,
				jots: [action.payload, ...state.jots],
				isLoading: false,
				isError: true
			};

		case 'SHOWJOT':
			return {
				...state,
				isLoading: true,
				isError: false
			};

		case 'EDITJOT':
			return {
				...state,
				isLoading: false,
				isError: true
			};

		case 'DELETEJOT':
			return {
				...state
			};
		case 'FILTERJOT':
			return {
				...state,
				isLoading: false,
				isError: true
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
