import React, { Component } from 'react';


class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src="/profile_photo.jpeg" alt="" />
        <h3>Sandra</h3>
        <h4>Eats:</h4>
        <ul>
          <li>Pizza</li>
          <li>Sushi</li>
          <li>Hotpot</li>
          <li>Pho</li>
          <li>Ramen</li>
          <li>Tacos</li>
        </ul>
        <h4>Current Location:</h4>
        <p> 455 Granville, Vancouver, Bc.</p>

      </div>
    );
  }
}

export default Profile;
