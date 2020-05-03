import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Label } from '../styles/Containers';
import { Card, Input } from '../styles/AuthForm';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Card>
        <h2>Sign Up</h2>
        <Form>
          <Label>
            Email:
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type='text'
              placeholder='email'
            />
          </Label>
          <Label>
            Password:
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type='password'
              placeholder='password'
            />
          </Label>
          <Button>SignUp</Button>
          <Link to='/login'>Already have an account?</Link>
        </Form>
      </Card>
    </>
  );
};
export default SignUp;
