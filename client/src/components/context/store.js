import React, { createContext, useReducer, useEffect } from 'react';

export const PostsContext = createContext({});

const initialState = {
	jots,
	editPost: {},
	readPost: {}
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

const PostsStore = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StoreContext.Provider value={[state, dispatch]}>
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
