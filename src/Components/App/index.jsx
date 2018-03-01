import React, { Component } from 'react';
import Profile from './Profile'
import Nav from './Nav'
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Profile />
      </div>
    );
  }
}

export default App;
