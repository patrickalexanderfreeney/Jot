import React from 'react';
import Axios from 'axios';
import { Form, Input, TextArea, Button, Label } from '../styles/Containers';

const JotForm = (props) => {
  // const config = {
  //   'Content-Type': 'application/json',
  //   Authorization:
  // };
  // Axios.post(url, data, config)

  return (
    <>
      <Form top='3%' left='5%' width='90%'>
        <Label>
          Title:
          <Input width='100%' type='text' name='title' />
        </Label>
        <Label>
          Body:
          <TextArea rows='23' cols='50' type='textarea' name='body' />
        </Label>
        <Label>
          <Input placeholder='add tags' type='text' name='tags' />
        </Label>
        <Button value='Submit'>Submit</Button>
      </Form>
    </>
  );
};

export default JotForm;
