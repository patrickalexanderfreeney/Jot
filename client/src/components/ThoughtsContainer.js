import React, { useState } from 'react';
import Thought from './Thought';

const ThoughtsContainer = props => {
  return (
    <>
      {props.thoughts.map(thought => (
        <Thought
          title={thought.title}
          body={thought.body}
          tags={thought.tags}
        />
      ))}
    </>
  );
};

export default ThoughtsContainer;
