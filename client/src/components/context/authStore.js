import React, { createContext, useReducer } from 'react';

export const authContext = createContext({});

const initialState = {
	currentPage: ""
};

function reducer(state, action) {
	switch (action.type) {
		case 'LOGIN':
		
			return {
				...state,
				currentPage: 'login'
			};
				
		
		case 'SIGNUP':
			return {
				...state,
				currentPage: 'signup',
				
			};

		default:
			return state;
	}
}
const AuthStore = ({ children })=> {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<authContext.Provider value={[state, dispatch]}>
			{children}
		</authContext.Provider>
	);
};

export default AuthStore;
