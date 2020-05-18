import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Landing from './components/Landing';
import Home from './components/Home';
// import Store from './components/store';
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
