import React, { useReducer} from 'react';
import { authContext } from '../context/authStore'
import { Grid, Typography, Button, makeStyles } from '@material-ui/core'
import { NavBar } from '../../components'
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
	const [ dispatch ] = useReducer(authContext);

	const sendToSignUp = () => {
		dispatch({ type: 'SIGNUP' });		
	}


	return (
		<Grid container>
			<Grid item style={{ width:'100%'}}>	
			<NavBar/>

			</Grid>
			<Grid container item className={classes.grow}  >
					<Typography 
					variant="h1"
					style={{color:'white', font: 'Cormorant', fontSize: 144, textShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)'}}
					>Jot. 
					</Typography> 
					<Typography 
					variant="h3"
					style={{color:'white', font: 'Work Sans', textShadow: '0px 4px 10px rgba(0, 0, 0, 0.50)'}}
					fontSize='48px'
					fontFamily= 'Work Sans'
					elevation={4}
					>A space for your thoughts. 
					</Typography> 
					<Button variant="contained" 
						size='large' 
						color="primary" 
						elevation={5}
						href="/signup"
						onClick={sendToSignUp}
						style={{ fontSize: '22px', color: '#fff', margin:'2rem' }} 
					>New Here? Sign Up</Button>
			</Grid>
		</Grid>
	);
};

export default Landing;
