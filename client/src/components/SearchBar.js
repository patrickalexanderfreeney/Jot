import React, { useState } from 'react';
import { SearchDiv, Input, Button } from '../styles/Containers';

const SearchBar = ({ filterJot, resetJots }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearch = (e) => {
		e.preventDefault();
		filterJot(searchTerm);
	};

	return (
		<SearchDiv>
			<form onSubmit={handleSearch}>
				<label>
					<Input
						width='100%'
						type='text'
						value={searchTerm}
						placeholder='Search...'
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
				</label>
			</form>
			<Button onClick={resetJots}>Clear</Button>
		</SearchDiv>
	);
};

export default SearchBar;
