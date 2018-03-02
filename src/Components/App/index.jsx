import React, { Component } from 'react';
import Profile from './Profile'
import axios from 'axios'
import Login from './Login'
import Nav from './Nav'
import Header from './Header'
import CreateMeetup from './CreateMeetup'
import JoinMeetup from './JoinMeetup'
import { Route, Switch } from 'react-router-dom'
import '../../Assets/css/styles.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {},
    }

    // this.apiUrl = 'https://backend-m2e.herokuapp.com/'
    this.apiUrl1 = 'http://localhost:8080/'

  }

  componentDidUpdate=()=>{
    const  username = localStorage.getItem('username')
    axios.post(this.apiUrl1 + 'login', { username }).then((res) => {
      this.setState({ userInfo: res.data })
    })
  }

  login =(input)=>{
    let {username }= input
    localStorage.setItem('username',username.value)
  
  }

  render() {
    const { match } = this.props

    return (
      <div className="App">
        <Header />
        <Nav />
        <div className="container">
          <div className="row">

            <Switch>
              <Route exact path={match.url} render={() =>
                <Profile
                  userInfo={this.state.userInfo}
                />
              } />
              <Route path='/create' render={() =>
                <CreateMeetup
                  user={this.state.userInfo}
                />
              } />
              <Route path={`${match.url}join`} render={() =>
                <JoinMeetup
                  user={this.state.userInfo}
                />
              } />

              <Route path={`${match.url}login`} render={() =>
                <Login
                  login={this.login}
                />
              } />
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
