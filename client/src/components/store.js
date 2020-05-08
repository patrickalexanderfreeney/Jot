import React, { createContext, useReducer } from 'react';

export const StoreContext = createContext({});

const initialState = {
	isLoading: false,
	isError: false,
	isLoggedIn: false,
	user: null,
	token: null
};

function reducer(state, action) {
	switch (action.type) {
		case 'LOGGINGIN':
			return {
				...state,
				isLoading: true,
				isError: false
			};

		case 'ERROR':
			return {
				...state,
				isLoading: false,
				isError: true
			};

		case 'SUCCESS':
			localStorage.setItem('user', JSON.stringify(action.payload.user));
			localStorage.setItem('token', JSON.stringify(action.payload.token));
			return {
				...state,
				isLoggedIn: true,
				isError: false,
				user: action.payload.user,
				token: action.payload.token
			};

		case 'LOGOUT':
			localStorage.clear();
			return {
				...state,
				isLoggedIn: false,
				user: null,
				token: null
			};

		default:
			return state;
	}
}

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StoreContext.Provider value={[state, dispatch]}>
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
