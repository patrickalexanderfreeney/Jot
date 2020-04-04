import React from 'react';

const ThoughtsSignUp = () => {
  return (
    <>
      <h2>Sign Up</h2>
      <form action=''>
        <label>
          Name:
          <input type='text' placeholder='Name' />
        </label>
        <label>
          Email:
          <input type='text' placeholder='email' />
        </label>
        <label>
          Password:
          <input type='password' placeholder='password' />
        </label>
        <input type='submit' value='' />
      </form>
    </>
  );
};
export default ThoughtsSignUp;
