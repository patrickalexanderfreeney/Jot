import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  [thoughts, setThoughts] = useState('');

  useEffect(() => {
    getThoughts();
  }, []);

  const getThoughts = async () => {
    const response = await fetch('https://localhost:5005/');
    const data = await response.json();
    setThoughts(data);
  };
  return (
    <>
      <h1>Welcome to Thoughts</h1>
      <ThoughtContainer thoughts={thoughts} />
    </>
  );
};

export default App;
