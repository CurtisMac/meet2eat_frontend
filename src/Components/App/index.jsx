import React, { Component } from 'react';
import Profile from './Profile'
import axios from 'axios'
import Nav from './Nav'
import Header from './Header'
import CreateMeetup from './CreateMeetup'
import JoinMeetup from './JoinMeetup'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {}
    }

    this.apiUrl = ''

  }

  componentWillMount = () => {
    // axios.post(this.apiUrl).then((res) => {

    // })


  }

  render() {
		const { match } = this.props

    return (
      <div className="App">

        <Nav />
        <Header />

        <Switch>
          <Route exact path={match.url} render={() =>
            <Profile 
            userInfo={this.state.userInfo}
            />
          } />
          <Route path={`${match.url}create`} render={() =>
            <CreateMeetup />
          } />
          <Route path={`${match.url}create`} render={() =>
            <JoinMeetup />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
