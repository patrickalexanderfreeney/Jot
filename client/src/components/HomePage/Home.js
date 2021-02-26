import React from 'react';
import PostStore from '../context/store';
import { JotsContainer, SearchBar} from '..'

import { Grid, createMuiTheme } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';


const theme = createMuiTheme({
	color: {
	  primary: {
		main: grey[50],
		search: grey[500]
	  },
	  secondary: {
		main: grey[500],
	  },
	},
	
	// home: {
	// 	backgroundImage: `url(${backgroundImg})`,
	// 	backgroundRepeat: "no-repeat",
	// 	backgroundPosition: "top",
	// 	backgroundSize: "cover",
	// 	backgroundAttachment: "fixed",
	// 	height: "100%"
	// },
	
});

const useStyles = makeStyles((theme) => ({
	homeMainContainer: {
	  paddingLeft: '6rem',
	  paddingRight: '6rem',
	
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
		// padding: '2rem'
	}
}));


const Home = () => {
	const classes = useStyles();

	return (
		<>
			<PostStore>
			<ThemeProvider theme={theme}>
				<Grid container direction='column' 
				// className={classes.home} 
				>
				<Grid container item direction='column' className={classes.root}>
					<Grid item xs={12}className={classes.rootItem}>
					{/* <SearchBar/> */}
					</Grid>
				
					<Grid 
						container 
						item 
						className={classes.homeMainContainer}
						spacing={2}
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
				</ThemeProvider>
			</PostStore>
		</>
	);
};

export default Home;
