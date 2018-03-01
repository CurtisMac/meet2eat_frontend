import React, { Component } from 'react';
import Profile from './Profile'
<<<<<<< HEAD
import axios from 'axios'
=======
import Nav from './Nav'
import Header from './Header'

>>>>>>> 69aa6940638cc49dd214add713c6fa77713d4292

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
