import React from 'react';

import { makeStyles, Card, CardActions, CardContent, Button, Typography, Paper } from '@material-ui/core';



const useStyles = makeStyles({
	pos: {
	  marginBottom: 12,
	},
	root: {
		maxWidth:'300px'
	}
	
  });

const JotCard = ({ jot, readJot, deleteJot, selectJot }) => {
	const classes = useStyles();

	return (
			<Paper className={classes.root}>
			<Card className={classes.root} variant="outlined">
			<CardContent>
			
			<Typography variant="h5" component="h2">
			{jot.title}
			</Typography>
			<Typography className={classes.pos} color="textSecondary">
			{jot.tags}

			</Typography>
			<Typography variant="body2" component="p">
				Begins...{jot.body}...They said.
			</Typography>
			</CardContent>
			<CardActions>
			<Button size="small">Learn More</Button>
			</CardActions>
			</Card>
			</Paper>
				);
};

export default JotCard;
