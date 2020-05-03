import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Landing from './components/Landing';
import Home from './components/Home';
import { AuthContext } from './context/auth';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
	const existingTokens = JSON.parse(localStorage.getItem('tokens'));
	const [authTokens, setAuthTokens] = useState(existingTokens);

	const setTokens = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};

	return (
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<Router>
				<>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route exact path='/login' component={LogIn} />
						<Route exact path='/signup' component={SignUp} />
						<PrivateRoute exact path='/home' component={Home} />
					</Switch>
					<GlobalStyle />
				</>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
