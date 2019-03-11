import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.handleClick = () => {
      this.setState({ count: this.state.count + 1})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            This is the React Chrome Extension we've all been waiting for
            A button counter
          </p>
          <button onClick={this.handleClick}>Add to Count</button>
          <h1>{this.state.count}</h1>
        </header>
      </div>
    );
  }
}

export default App;
