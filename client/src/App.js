import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import ThoughtsSignUp from './components/ThoughtsSignUp';
import ThoughtsLogIn from './components/ThoughtsLogIn';
import ThoughtsLanding from './components/ThoughtsLanding';
import ThoughtsPage from './components/ThoughtsPage';
import ThoughtForm from './components/ThoughtForm';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={<ThoughtsLanding />} />
        <Route path='/login' component={<ThoughtsLogIn />} />
        <Route path='/signup' component={<ThoughtsSignUp />} />
        <Route path='/home' component={<ThoughtsPage />} />
        <Route path='/createthough' component={<ThoughtForm />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
