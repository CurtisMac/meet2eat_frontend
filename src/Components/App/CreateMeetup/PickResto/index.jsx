import React, { Component } from 'react';


export default class PickedResto extends Component {
  constructor() {
    super()
    this.state = {
      ListResto: [],
      PickedResto: {},
      StartTime: '',
      EndTime: '',
      // CreatedBy: this.props.user.name
    }
  }

  render() {
    return (
      <div className="restList">
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="noodles.jpeg" alt="" class="circle" />
            <span className="title">Pholicious</span>
            <p><br />Second Line</p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
    );
  }
}

