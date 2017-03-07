import React, { Component } from 'react';

import Searchbar from './pages/search_bar';

import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
