import React from 'react';
import { SearchDiv, Input } from '../styles/Containers';

const SearchBar = () => {
  return (
    <SearchDiv>
      <form>
        <label>
          <Input
            width='100%'
            type='text'
            name='search'
            placeholder='Search...'
          />
        </label>
      </form>
    </SearchDiv>
  );
};

export default SearchBar;
