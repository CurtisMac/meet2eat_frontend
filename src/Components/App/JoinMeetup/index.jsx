import React, { Component } from 'react';
import PickedTime from './PickedTime'
import MeetupList from './PickedTime'
import Complete from './complete'
// import confirm from './Confirm'


export default class JoinMeetup extends Component {
  constructor() {
    super()
    this.state = {
      // user:this.props.user,
      MeetupList: [],
      PickedTime: '',
      step: 2
    }
    this.apiJoin = ''
  }


  PickedTime = (start, end) => {
    this.setState({
      step: 2,
      StartTime: start,
      EndTime: end
    })
 // axios.post(this.apiCreat,data).then((res)=>{

    // })

  }

  Pickedmeetup = () => {

  }

  confirm = () => {
    let data = {
      restaurant: this.state.pickedResto,
      start: this.state.StarTime,
      end: this.state.EndTime,
      createdby: this.state.CreatedBy
    }

    // axios.post(this.apiCreat,data).then((res)=>{

    // }) 
  }


  render() {
    if (this.state.step === 1) {
      return (
        <div className="profile">
          <PickedTime
            PickedTime={this.PickedTime}
          />
        </div>
      )
    }
    if (this.state.step === 2) {
      return (
        <div className="profile">
          <MeetupList
          MeetupList={this.state.MeetupList}

          />
        </div>
      )
    }

    if (this.state.step === 3) {
      return (
        <div className="profile">
          <Complete
            confirm={this.confirm}
          />
        </div>
      )
    }

  }
}

