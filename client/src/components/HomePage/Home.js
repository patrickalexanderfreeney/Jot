import React from 'react';
import JotStore from '../context/jotStore';
import { JotsContainer, NavBar } from '../../components'
import SideBar from '../SideBar/SideBar'
import { div, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles((theme) => ({
// 	homeMainContainer: {
// 	  paddingLeft: '6rem',
// 	  paddingRight: '6rem',
// 	  border: '5px solid red'	
// 	},
// 	root: {
// 		textAlign: 'center',
// 	},
// 	rootItem: {
// 		marginTop: '5rem',
// 		paddingLeft: '2rem',
// 		paddingRight: '2rem',
// 		width:'35rem',
// 		alignSelf:'center',
// 		justifyContent:'center',
// 		border: '5px solid red'
// 	}
// }));
	


const Home = () => {
	// const classes = useStyles();

	return (
			<JotStore>
					<div  style={{height:'auto', position:'relative'}}>
						<div>
							<NavBar/>
						</div>
						<div style={{display:'flex', flexDirection:'row', position: 'relative', height:'auto', transform: 'translate(13%, 10%)'}}>
							<div style={{ width:'auto', padding:'1rem'}}>
								<SideBar/>
							</div>
							<div style={{ display:'flex', flexDirection:'row', flexWrap: 'wrap', padding:'1rem', maxWidth:'65%'}}>
								<JotsContainer/>
							</div>
						</div>
					</div>
			</JotStore>
	);
};

export default Home;

								
						
