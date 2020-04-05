import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../API';
import ThoughtsContainer from '../components/ThoughtsContainer';
import SearchBar from './SearchBar';

const ThoughtsPage = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    getThoughts();
  }, []);

  const getThoughts = async () => {
    const response = await API.get('thoughts');

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
