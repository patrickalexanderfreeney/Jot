import React from 'react';
import { Button, Card } from '../styledElements';

const Thought = ({ title, body, tags }) => {
  return (
    <Card>
      <p>Thought here!</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{tags}</p>
      <Button outlined>Remove</Button>
      <Button outlined>Edit </Button>
    </Card>
  );
};

export default Thought;
