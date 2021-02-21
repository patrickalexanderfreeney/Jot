import React from 'react';
import PostStore from './context/store';
import NavBar from './Navbar';
import JotsContainer from './JotsContainer';
import JotForm from './JotForm';
import SearchBar from './SearchBar';


const Home = (props) => {
	return (
		<>
			<PostStore>
				<NavBar />
				<MainSection>
					<SearchBar 
					// resetJots={resetJots} filterJot={filterJot} 
					/>
					<JotsContainer />
						
				</MainSection>
			</PostStore>
		</>
	);
};

export default Home;
