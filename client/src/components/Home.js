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
	  marginTop: '2rem',
	  paddingLeft: '6rem',
	  paddingRight: '6rem',
	
	},
	root: {
		textAlign: 'center',
	},
	rootItem: {
		marginTop: '3rem',
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
						spacing={3}
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
			</PostStore>
		</>
	);
};

export default Home;
