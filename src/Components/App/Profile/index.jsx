import React, { Component } from 'react';


class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src="/profile_photo.jpeg" alt=""/>
        <h3>Sandra</h3>
        <ul>
          <h3>Eats:</h3>
          <li>Pizza</li>
          <li>Sushi</li>
          <li>Hotpot</li>
          <li>Pho</li>
          <li>Ramen</li>
          <li>Tacos</li>
        </ul>
        <h4>Current Location: 455 Granville, Vancouver, Bc.</h4>

      </div>
    );
  }
}

export default Profile;
