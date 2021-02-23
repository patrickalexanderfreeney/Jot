import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Landing, LogIn, SignUp, PrivateRoute } from './components';
import GlobalStyle from './styles/GlobalStyle';

const App = (props) => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/login' component={LogIn} />
				<Route exact path='/signup' component={SignUp} />
				<PrivateRoute exact path='/home' component={Home} />
			</Switch>
			<GlobalStyle />
		</Router>
	);
};

export default App;
