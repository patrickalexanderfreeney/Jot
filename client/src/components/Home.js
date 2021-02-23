import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
//
import PostStore from './context/store';
import NavBar from './Navbar';
import JotsContainer from './JotsContainer'
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
	homeMainContainer: {
	  marginTop: '4rem',
	  paddingLeft: '10rem',
	  paddingRight: '6rem'
	},
	root: {
		textAlign: 'center',
	},
	rootItem: {
		marginTop: '2rem',
	}
}));


const Home = (props) => {
	const classes = useStyles();

	return (
		<>
			<PostStore>
				<Grid container direction='column' >
				<Grid item>
				<NavBar />
				</Grid>
				<Grid item container direction='column' className={classes.root}>
					<Grid item className={classes.rootItem}>
					<SearchBar 
					// resetJots={resetJots} filterJot={filterJot} 
					/>
					</Grid>
				
					<Grid item container className={classes.homeMainContainer}>
					<JotsContainer />
					</Grid>
				</Grid>
				</Grid>
			</PostStore>
		</>
	);
};

export default Home;
