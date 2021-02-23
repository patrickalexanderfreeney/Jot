import React from 'react';
import { Grid, createMuiTheme } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';


import PostStore from '../context/store';
import NavBar from '../NavBar/Navbar';
import JotsContainer from '../Jot/JotsContainer'
import SearchBar from '../SearchBar';

const theme = createMuiTheme({
	color: {
	  primary: {
		// Purple and green play nicely together.
		main: grey[50],
		search: grey[500]
	  },
	  secondary: {
		// This is green.A700 as hex.
		main: grey[500],
	  },
	},
  });

const useStyles = makeStyles((theme) => ({
	homeMainContainer: {
	//   marginTop: '2rem',
	  paddingLeft: '6rem',
	  paddingRight: '6rem',
	
	},
	root: {
		textAlign: 'center',
	},
	rootItem: {
		marginTop: '2rem',
		width:'50rem',
		alignSelf:'center',
	}
}));


const Home = () => {
	const classes = useStyles();

	return (
		<>
			<PostStore>
			<ThemeProvider theme={theme}>
				<Grid container direction='column' >
				<Grid item>
				<NavBar />
				</Grid>
				<Grid container item direction='column' className={classes.root}>
					<Grid item className={classes.rootItem}>
					<SearchBar 
					// resetJots={resetJots} filterJot={filterJot} 
					/>
					</Grid>
				
					<Grid 
						container 
						item 
						className={classes.homeMainContainer}
						spacing={2}
						direction="row"
						justify="center"
						alignItems="center"
					>
					<Grid item xs={0} s={2} />
					<Grid item xs={12} s={8} />
					<JotsContainer />
					</Grid>
					<Grid xs={0} s={2} />

				</Grid>
				</Grid>
				</ThemeProvider>
			</PostStore>
		</>
	);
};

export default Home;
