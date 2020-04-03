import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Section } from './styledElements';

import Navbar from './components/Navbar';
import ThoughtsLanding from './components/ThoughtsLanding';
import SearchBar from './components/SearchBar';
import ThoughtContainer from './components/ThoughtsContainer';
import ThoughtForm from './components/ThoughtForm';
import './App.css';

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    getThoughts();
  }, []);

  const getThoughts = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/thoughts');

    const data = await response.data;
    setThoughts(data);
    // console.log(response.data);
  };
  return (
    <div className='App'>
      <Navbar />

      <ThoughtsLanding />

      <SearchBar />
      <h1>Welcome to Thoughts</h1>

      <ThoughtContainer thoughts={thoughts} />

      <ThoughtForm />
    </div>
  );
};

export default App;
