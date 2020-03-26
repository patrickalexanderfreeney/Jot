import React, { useState } from 'react';
import Thought from './Thought';

const ThoughtsContainer = props => {
  {
    props.thoughts.map(thought => <Thought />);
  }
};

export default ThoughtsContainer;
