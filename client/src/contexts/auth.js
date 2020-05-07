import React, {
	createContext,
	useState,
	useEffect,
	useMemo,
	useContext,
	useReducer
} from 'react';
import AuthReducer from './AuthReducer';

const initialState = {
	username: '',
	password: '',
	isLoading: false,
	isError: false,
	isLoggedIn: false,
	user: null,
	token: null
};

const AuthProvider = ({ children }) => {
	useEffect(() => {
		if (localStorage.data) {
			dispatch(loggedin);
		}
	}, []);

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<AuthContext.Provider value={[state, dispatch]}>
			{children}
		</AuthContext.Provider>
	);
};

export const AuthContext = createContext(initialState);
export default AuthProvider;
