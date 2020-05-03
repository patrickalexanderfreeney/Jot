import React, { useEffect, useState } from 'react';
import API from '../API';
import Jot from './Jot';
import SearchBar from './SearchBar';
import { JotList } from '../styles/Containers';

const JotsContainer = (props) => {
  // const [searchTerm, setSearchTerm] = useState[''];
  const [jots, setJots] = useState([]);

  useEffect(() => {
    getJots();
  }, []);

  const getJots = async () => {
    const response = await API.get('jots');

    const data = await response.data;
    setJots(data);
  };
  return (
    <>
      <SearchBar />
      <JotList>
        {jots.map((jot) => (
          <Jot title={jot.title} body={jot.body} tags={jot.tags} />
        ))}
      </JotList>
    </>
  );
};

export default JotsContainer;
