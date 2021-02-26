import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core'
import backgroundImg from '../../styles/mediaAssets/pexels-eva-elijas-5779296.jpg'



const useStyles = makeStyles((theme) => ({
	grow: {
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		textAlign:'center',
		height:'85vh',
		transform: 'translateY(-7%)',
	},
	home: {
		backgroundImage: `url(${backgroundImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "bottom",
		backgroundAttachment: "fixed",
		height: "100%"
	},
}));

const Landing = () => {
	const classes = useStyles();

	return (
		<Grid container>
			<Grid container item className={classes.grow}  >
					<Typography 
					variant="h1"
					style={{color:'white'}}
					>
						Welcome To Jot. <br/> 
						Here for your thoughts...
					</Typography> 
					<Button variant="contained" 
						size='large' 
						color="primary" 
						disableElevation 
						href="/signup"
						style={{ fontSize: '1rem', color: '#fff', margin:'2rem' }} 
					>New Here? Let's Get started.</Button>
			</Grid>
			<Grid className={classes.overlay}>

			</Grid>
		</Grid>
	);
};

export default Landing;
