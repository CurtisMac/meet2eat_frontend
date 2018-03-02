import React, { Component } from 'react';
import Profile from './Profile'
// import axios from 'axios'
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
              <Route path={`${match.url}create`} render={() =>
                <CreateMeetup
                  user={this.state.userInfo}
                />
              } />
              <Route path={`${match.url}join`} render={() =>
                <JoinMeetup />
              } />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
