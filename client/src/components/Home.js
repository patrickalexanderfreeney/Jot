import React from 'react';
import PostStore from './context/store';
import NavBar from './Navbar';
import JotsContainer from './JotsContainer';
import JotForm from './JotForm';
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
					{/* <RightPanel>
					</RightPanel> */}
				</MainSection>
			</PostStore>
		</>
	);
};

export default Home;
