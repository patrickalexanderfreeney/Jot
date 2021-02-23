import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // searchBar: {
  //   textAlign:'center',
  //   margin: '20rem',
  // },
 
}));

const SearchBar = ({ filterJot, resetJots }) => {
  const classes = useStyles();

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
			<form classNames={classes.searchBar}onSubmit={handleSearch}>
					<TextField
						variant="outlined"
						label="It goes something like...." 
						type='text'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
			<Button onClick={handleReset}>Clear</Button>
			</form>
	);
};

export default SearchBar;
