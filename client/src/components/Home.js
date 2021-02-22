import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
//
import PostStore from './context/store';
import NavBar from './Navbar';
import JotsContainer from './JotsContainer'
import JotForm from './JotForm';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
  }));


const Home = (props) => {
	return (
		<>
			<PostStore>
				<Grid container direction='column'>
				<Grid item>
				<NavBar />
				</Grid>
				<Grid item container>
				<div >

					<SearchBar 
					// resetJots={resetJots} filterJot={filterJot} 
					/>
					<JotsContainer />
						
				</div>
				</Grid>
				</Grid>
			</PostStore>
		</>
	);
};

export default Home;
