import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Login, NotFound, Player, Register } from '../containers';
import { Layout } from '../components';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
