import React from 'react';

const ThoughtForm = () => {
  return (
    <>
      <form>
        <label>
          Title:
          <input type='text' name='title' />
        </label>
        <label>
          Body:
          <input type='text' name='body' />
        </label>
        <label>
          Tags:
          <input type='text' name='tags' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default ThoughtForm;
