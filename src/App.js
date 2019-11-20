import React, { Component } from 'react';
import Users from './Components/Users/Users';
import Navbar from './Components/Layout/Navbar';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
        <Users />
        </div>
      </div>
    );
  }
}
export default App;
