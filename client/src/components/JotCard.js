import React from 'react';
//
import { makeStyles, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	pos: {
	  marginBottom: 12,
	},
  });

const JotCard = ({ jot, readJot, deleteJot, selectJot }) => {
	const classes = useStyles();
  	const bull = <span className={classes.bullet}>•</span>;

	return (
		
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
				);
};

export default JotCard;
