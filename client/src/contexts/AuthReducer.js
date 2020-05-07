const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'FIELD':
			return {
				...state,
				isLoading: true
			};

		case 'LOGGEDIN':
			return {
				...state,
				isLoggedIn: true,
				user: localStorage.user,
				token: localStorage.token
			};
		case 'LOGIN':
			return {
				...state,
				isLoading: true
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
				user: null
			};
		default:
			return state;
	}
};

export default AuthReducer;
