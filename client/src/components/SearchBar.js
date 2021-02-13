import React, { useState } from 'react';
import { SearchDiv, Input } from '../styles/Containers';
import { Button } from '../styles/Buttons';

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
		<SearchDiv>
			<form onSubmit={handleSearch}>
					<Input
						width='40%'
						type='text'
						value={searchTerm}
						placeholder='Search...'
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
			<Button onClick={handleReset}>Clear</Button>
			</form>
		</SearchDiv>
	);
};

export default SearchBar;
