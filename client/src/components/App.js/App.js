import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import backgroundImg from '../../styles/mediaAssets/pexels-sunyu-kim-1544880.jpg'
import AuthStore from '../context/authStore';
import { Home, Landing, AuthPage, PrivateRoute, NavBar, LogIn } from '../../components';
import {CssBaseline, makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
	color: {
	  primary: {
		main: '#1379CC',
		// search: grey[500]
	  },
	  secondary: {
		main: '#fff',
	  },
	},

	typography: {
		fontFamily: [
			'Cormorant',
			'Work Sans',
			'Sans Serif',
		].join(','),
	  },
});

const useStyles = makeStyles((theme) => ({
	
		root: {
			// backgroundImage: `url(${backgroundImg})`,
			// backgroundRepeat: "no-repeat",
			// backgroundPosition: "center",
			// backgroundSize: "cover",
			// backgroundAttachment: "fixed",
			minHeight: "100vh",
			paddingBottom:'2rem'
		},
}));


const App = () => {
	const classes = useStyles();

	return (
		<AuthStore>
			<ThemeProvider theme={theme}>
				<Router>			
					{/* <NavBar/> */}
					<section className={classes.root}>
					<Switch>
						<Route exact path='/welcome' component={Landing} />
						<Route exact path='/login' component={LogIn} />
						<PrivateRoute exact path='/home' component={Home} />
					</Switch>
					<CssBaseline />			
					</section>
				</Router>
			</ThemeProvider>
		</AuthStore>
	);
};

export default App;
