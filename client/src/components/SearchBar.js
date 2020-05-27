import React, { useState } from 'react';
import { SearchDiv, Input, Button } from '../styles/Containers';

const SearchBar = ({ filterJot, resetJots }) => {
	const [searchTerm, setSearchTerm] = useState();

	return (
		<SearchDiv>
			<form>
				<label>
					<Input
						width='100%'
						type='text'
						value={searchTerm}
						placeholder='Search...'
						onChange={(e) => {
							setSearchTerm(e.target.value);
							filterJot(searchTerm);
						}}
					/>
				</label>
			</form>
			<Button onClick={resetJots}>Clear</Button>
		</SearchDiv>
	);
};

export default SearchBar;
