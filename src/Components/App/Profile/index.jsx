import React, { Component } from 'react';


class Profile extends Component {
  render() {
    return (
      <div className="profile col s12">
        <img className="circle responsive-img" src="/profile_photo.jpeg" alt="" />
        <h3 className="center-align">Sandra</h3>
        <h4>Eats <i class="em em-hamburger"></i></h4>
        <ul className="bodyText">
          <li>Pizza</li>
          <li>Sushi</li>
          <li>Hotpot</li>
          <li>Pho</li>
          <li>Ramen</li>
          <li>Tacos</li>
        </ul>
        <h4>Current Location </h4>
        <p className="bodyText"> <i class="em em-round_pushpin"></i>455 Granville, Vancouver, Bc.</p>
        <h4>Bio</h4>
        <p className="bodyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis quam lorem. Praesent 
          facilisis, est non consequat eleifend, turpis neque semper odio, a scelerisque est est eget nisi. 
          Proin vitae neque sed lectus egestas pretium.</p>
      </div>
    );
  }
}

export default Profile;
