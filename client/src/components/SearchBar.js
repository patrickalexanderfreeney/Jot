import React from 'react';

const SearchBar = () => {
  return (
    <>
      <form>
        <label>
          Tags:
          <input type='text' name='search' placeholder='search' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default SearchBar;
