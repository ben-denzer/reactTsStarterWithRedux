import * as React from 'react';
import Hello from '../Hello/Hello';
import { AppWrapper } from './AppStyles';

const logo = require('../../img/logo.svg');

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name="Ben" enthusiasmLevel={7} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </AppWrapper>
    );
  }
}

export default App;
