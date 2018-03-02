import React, { Component } from 'react';


export default class Profile extends Component {
  render() {
    let user = this.props.userInfo
    return (
      <div className="profile col s12">
        <img className="circle responsive-img" src={user.photo} alt="" />
        <h3 className="center-align">{user.name}</h3>
        <h4>Eats <i className="em em-hamburger"></i></h4>
        <ul className="bodyText">
          <li>Pizza</li>
          <li>Sushi</li>
          <li>Hotpot</li> 
          <li>Pho</li>
          <li>Ramen</li>
          <li>Tacos</li> 
        </ul>
        <h4>Current Location </h4>
        <p className="bodyText"> <i className="em em-round_pushpin"></i>455 Granville, Vancouver, Bc.</p>
        <h4>Bio</h4>
        <p className="bodyText">
          {user.bio}</p>
      </div>
    );
  }
}


