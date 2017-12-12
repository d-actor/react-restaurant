import React from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const App = () => (
  <Segment basic>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Home} />
      <ProtectedRoute exact path='/dashboard' component={Dashboard} />
    </Switch>
  </Segment>
);

export default App;
