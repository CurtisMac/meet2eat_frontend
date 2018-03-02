import React, { Component } from 'react';


class CreateMeetup extends Component {
  constructor (){
    super()
    this.state={
      ListResto:[],
      PickedResto:{},
      StartTime:'',
      EndTime:'',
      CreatedBy:this.props.user.name
    }
  }
    render() {
        return (
            <div className="profile">
              test
            </div>
        );
    }
}

export default CreateMeetup;