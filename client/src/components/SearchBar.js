import React, { useState } from 'react';
import { SearchDiv, Input } from '../styles/Containers';

const SearchBar = () => {
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
						}}
					/>
				</label>
			</form>
		</SearchDiv>
	);
};

export default SearchBar;
