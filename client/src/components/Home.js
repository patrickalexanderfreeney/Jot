import React from 'react';
import { Grid } from '@material-ui/core'
import PostStore from './context/store';
import NavBar from './Navbar';
import JotsContainer from './JotsContainer'
import JotForm from './JotForm';
import SearchBar from './SearchBar';

import { MainSection, LeftPanel, RightPanel } from '../styles/Containers';

const Home = (props) => {
	return (
		<>
			<PostStore>
				<Grid container direction='column'>
				<Grid item>
				<NavBar />
				</Grid>
				<Grid item>
				<MainSection>

					<SearchBar 
					// resetJots={resetJots} filterJot={filterJot} 
					/>
					<JotsContainer />
						
				</MainSection>
				</Grid>
				</Grid>
			</PostStore>
		</>
	);
};

export default Home;
