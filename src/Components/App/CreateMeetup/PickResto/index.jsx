import React, { Component } from 'react';


class CreateMeetup extends Component {
  constructor() {
    super()
    this.state = {
      ListResto: [],
      PickedResto: {},
      StartTime: '',
      EndTime: '',
      CreatedBy: this.props.user.name
    }
  }

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

export default PickedResto;