import React, { Component } from 'react';


export default class PickedResto extends Component {
 
  

  render() {
    return (
      <div className="restList">
        <ul class="collection">
          <li class="collection-item avatar">
            <img src="noodles.jpeg" alt="" class="circle" />
            <span class="title">Pholicious</span>
            <p>First Line <br />Second Line</p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
    );
  }
}

