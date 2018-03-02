import React, { Component } from 'react';
import PickedTime from './PickedTime'
import MeetupList from './MeetupList'
import Confirm from './confirm'
// import confirm from './Confirm'
import axios from 'axios'



export default class JoinMeetup extends Component {
  constructor() {
    super()
    this.state = {
      // user:this.props.user,
      MeetupList: [],
      PickedTime: '',
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
    })

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
          <Confirm
            confirm={this.confirm}
          />
        </div>
      )
    }

  }
}

