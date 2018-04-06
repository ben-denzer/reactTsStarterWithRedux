import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import NotFound from '../NotFound/NotFound';
import { AppWrapper } from './AppStyles';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
