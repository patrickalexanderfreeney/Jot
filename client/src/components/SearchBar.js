import React, { useState } from 'react';
import { Button, TextField, Paper, Card } from '@material-ui/core';


const SearchBar = ({ filterJot, resetJots }) => {

	const [searchTerm, setSearchTerm] = useState('');
	const handleSearch = (e) => {
		e.preventDefault();
		filterJot(searchTerm);
	};

	const handleReset = () => {
		resetJots();
		setSearchTerm('');
	};

	return (
			<Paper elevation={4}>
			<form elevation={2} onSubmit={handleSearch}>
					<TextField
						autoFocus={true}
						fullWidth={true}
						// variant="filled"
						label="Title?" 
						type='text'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
					<TextField
						fullWidth={true}
						// variant="filled"
						multiline
						label="What's on your mind...?" 
						type='text'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
					<TextField
						fullWidth={true}
						// variant="filled"
						multiline
						label="Any tags...?" 
						type='text'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
			</form>
			</Paper>
	);
};

export default SearchBar;
