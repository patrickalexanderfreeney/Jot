import React from 'react';

import { makeStyles, Card, CardActions, CardContent, Button, Typography, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';




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
			<Paper className={classes.root} elevation={4}>
			<Card className={classes.root} variant="outlined">
			<CardContent>
			
			<Typography variant="h5" component="h2">
			{jot.title}
			</Typography>
			
			<Typography variant="body2" component="p">
				Begins...{jot.body}...They said.
			</Typography>
			</CardContent>
			<CardActions>	
			<Button size="medium">Read</Button>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				startIcon={<DeleteIcon />}
				onClick={()=>{deleteJot(jot.id)}}
			>
				Delete
			</Button>
			</CardActions>
			</Card>
			</Paper>
				);
};

export default JotCard;
