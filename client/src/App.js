import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const App = () => (
  <Segment basic>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </Segment>
);

export default App;
