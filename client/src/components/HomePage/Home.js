import React from 'react';
import JotStore from '../context/jotStore';
import { JotsContainer, NavBar } from '../../components'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	homeMainContainer: {
	  paddingLeft: '6rem',
	  paddingRight: '6rem',
	  border: '5px solid red'	
	},
	root: {
		textAlign: 'center',
	},
	rootItem: {
		marginTop: '5rem',
		paddingLeft: '2rem',
		paddingRight: '2rem',
		width:'35rem',
		alignSelf:'center',
		justifyContent:'center',
		border: '5px solid red'
	}
}));
	


const Home = () => {
	const classes = useStyles();

	return (
			<JotStore>
				<Grid container>
					<Grid item >
						<NavBar/>
					</Grid>
					<Grid container item direction='row' >
						<Grid item xs={12} 
						// className={classes.rootItem}
						>
							<div>Hello there</div>
							<div>Hello there</div>
							<div>Hello there</div>
							<div>Hello there</div>
							<div>Hello there</div>
							<div>Hello there</div>
						</Grid>
					
						<Grid 
							container 
							item 
							// className={classes.homeMainContainer}
							spacing={2}
							direction="row"
							justify="center"
							alignItems="center"
							xs={10}
						>
						<JotsContainer />
						</Grid>

					</Grid>
					</Grid>
			</JotStore>
	);
};

export default Home;
