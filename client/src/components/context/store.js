import React, { createContext, useReducer } from 'react';

export const PostContext = createContext({});

const initialState = {
	jots: {},
	editJot: {},
	showJot: {}
};

function reducer(state, action) {
	switch (action.type) {
		case 'SHOWPOST':
			return {
				...state,
				isLoading: true,
				isError: false
			};

		case 'EDITPOST':
			return {
				...state,
				isLoading: false,
				isError: true
			};

		case 'DELETEPOST':
			return {
				...state,
				isLoading: false,
				isError: true
			};
		case 'FILTERPOSTS':
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
