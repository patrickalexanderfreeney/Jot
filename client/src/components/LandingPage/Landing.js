import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { NavBar } from '../../components';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		minHeight: 85,
	  },
}));

const Landing = () => {
	const classes = useStyles();

	return (
		<Grid container direction='column'>
			
			<Grid item> 
			<NavBar />
			</Grid>
			
			<Grid item classNames={classes.grow}>
			<Typography variant="h3">Welcome To Jot..</Typography>
			<Typography variant="h3">A place for your thoughts.</Typography>
			</Grid>
		</Grid>
	);
};

export default Landing;
