import React, {
	createContext,
	useState,
	useEffect,
	useMemo,
	useContext
} from 'react';

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = (props) => {
	const [authData, setAuthData] = useState(initialAuthData);

	useEffect(() => {
		const currentAuthData = localStorage.data;
		if (currentAuthData) {
			setAuthData(currentAuthData);
		}
	}, []);

	const onLogOut = () => {
		setAuthData(initialAuthData);
		localStorage.clear();
	};

	const onLogIn = (newAuthData) => setAuthData(newAuthData);

	const authDataValue = useMemo(() => ({ ...authData, onLogIn, onLogOut }), [
		authData
	]);

	return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
