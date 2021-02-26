import React, { useState } from 'react';
import { TextField, Paper } from '@material-ui/core';


const SearchBar = ({ filterJot, resetJots }) => {

	const [searchTerm, setSearchTerm] = useState('');
	const handleSearch = (e) => {
		e.preventDefault();
		filterJot(searchTerm);
	};

	// const handleReset = () => {
	// 	resetJots();
	// 	setSearchTerm('');
	// };

	return (
			<Paper elevation={2}>
			<form  onSubmit={handleSearch} elevation={4}>
					<TextField
						autoFocus={true}
						fullWidth={true}
						variant="outlined"
						label="Search..." 
						type='text'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
						// import SearchIcon from '@material-ui/icons/Search';

					/>
			</form>
			 </Paper>
	);
};

export default SearchBar;
