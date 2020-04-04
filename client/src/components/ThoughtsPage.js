import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThoughtsContainer from '../components/ThoughtsContainer';
import SearchBar from './SearchBar';

const ThoughtsPage = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    getThoughts();
  }, []);

  const getThoughts = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/thoughts');

    const data = await response.data;
    setThoughts(data);
  };
  return (
    <>
      <SearchBar />
      <ThoughtsContainer thoughts={thoughts} />
    </>
  );
};

export default ThoughtsPage;
