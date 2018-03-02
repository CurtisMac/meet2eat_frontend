import React, { Component } from 'react';


class CreateMeetup extends Component {
  constructor (){
    super()
    this.state={
      ListResto:[],
      PickedResto:{},
      StartTime:'',
      EndTime:'',
      // CreatedBy:this.props.user.name
    }
  }
    render() {
        return (
            <div className="profile">
            <h3 className="center-align">Pick a Restaurant</h3>
            </div>
        );
    }
}

export default CreateMeetup;