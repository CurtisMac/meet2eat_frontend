import React, { Component } from 'react';
import Profile from './Profile'
import axios from 'axios'
import Nav from './Nav'
import Header from './Header'


class App extends Component {
  constructor(){
    super()
    this.state={
        userInfo:{}
    }

    this.apiUrl = ''

  }

  componentWillMount=()=>{
    axios.get(this.apiUrl).then((res)=>{

    })

    

  }

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
