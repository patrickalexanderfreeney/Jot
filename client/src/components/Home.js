import React from 'react';
import PostStore from './components/context/store';

import NavBar from './Navbar';
import JotsContainer from './JotsContainer';
import JotForm from './JotForm';
import JotShow from './JotShow';
import { MainSection, LeftPanel, RightPanel } from '../styles/Containers';

const Home = (props) => {
	return (
		<>
			<PostStore>
				<NavBar />
				<MainSection>
					<LeftPanel>
						<JotsContainer />
					</LeftPanel>
					<RightPanel>
						<JotShow />
						<JotForm />
					</RightPanel>
				</MainSection>
			</PostStore>
		</>
	);
};

export default Home;
