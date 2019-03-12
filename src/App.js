import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.incCount = () => {
      this.setState({ count: this.state.count + 1})
    }
    this.decCount = () => {
      this.setState({ count: this.state.count - 1})
    }
    this.doubleCount = () => {
      this.setState({ count: this.state.count * 2})
    }
    this.halfCount = () => {
      this.setState({ count: this.state.count / 2})
    }
    this.squareRoot = () =>{
      this.setState({ count: Math.sqrt(this.state.count).toFixed(4)})
    }
    this.reset = () => {
      this.setState({ count: 0})
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
          <button onClick={this.incCount}>Add to Count</button>
          <button onClick={this.decCount}>Decrease Count</button>
          <button onClick={this.doubleCount}>Double Count</button>
          <button onClick={this.halfCount}>Half Count</button>
          <button onClick={this.squareRoot}>Square root of Count</button>
          <button onClick={this.reset}>Reset Count</button>
          <h1>{this.state.count}</h1>

        </header>
      </div>
    );
  }
}

export default App;
