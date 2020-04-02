import React from 'react';

const Thought = ({ title, body, tags }) => {
  return (
    <>
      <p>Thought here!</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{tags}</p>
      <hr />
    </>
  );
};

export default Thought;
