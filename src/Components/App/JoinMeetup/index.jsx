import React, { Component } from 'react';
import PickedTime from './PickedTime'
import MeetupList from './MeetupList'
import Confirm from './confirm'
import axios from 'axios'
// import Confirm from '../Confirm'



export default class JoinMeetup extends Component {
  constructor() {
    super()
    this.state = {
      // user:this.props.user,
      MeetupList: [],
      PickedTime: '',
      PickedMeetup:{},
      step: 1
    }
    this.apiCreate='https://backend-m2e.herokuapp.com/'
    this.apiUrl1 = 'http://localhost:8080/'
  
  }


  PickedTime = (time) => {
    this.setState({
      step: 2,
      PickedTime: time
    })
let data=this.state.PickedTime
 axios.post(this.apiUrl1+'meetups', data).then((res)=>{
  console.log(res.data)
  this.setState({
MeetupList:res.data.meetups
  })
    })

  }

  Pickedmeetup = (meetup) => {
    this.setState({
      step: 3,
      PickedMeetup: meetup
    })
  }

  confirm = () => {
    let data = {
      PickedTime: this.state.PickedTime,
      start: this.state.PickedTime,
    }

    // axios.post(this.apiCreat,data).then((res)=>{

    // }) 
  }

  back=()=>{
    let back = this.state.step -1
    this.setState({step:back})
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
          Pickedmeetup={this.Pickedmeetup}
          />
        </div>
      )
    }

    if (this.state.step === 3) {
      return (
        <div className="profile">
          <Confirm
            confirm={this.confirm}
            PickedMeetup= {this.state.PickedMeetup}
            PickedTime= {this.state.PickedTime}
            EndTime= {this.state.EndTime}
            back={this.back}
          />
        </div>
      )
    }

  }
}

