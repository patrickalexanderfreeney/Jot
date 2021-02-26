import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import backgroundImg from './styles/mediaAssets/pexels-sunyu-kim-1544880.jpg'


import { Home, Landing, LogIn, SignUp, PrivateRoute, NavBar } from './components';
import {CssBaseline, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	
		root: {
			backgroundImage: `url(${backgroundImg})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			minHeight: "110vh",
			paddingBottom:'2rem'
		},
}));


const App = (props) => {
	const classes = useStyles();

	return (
		<Router>			
			<section className={classes.root}>
			<NavBar/>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/login' component={LogIn} />
				<Route exact path='/signup' component={SignUp} />
				<PrivateRoute exact path='/home' component={Home} />
			</Switch>
			<CssBaseline />			
			</section>
		</Router>
	);
};

export default App;
