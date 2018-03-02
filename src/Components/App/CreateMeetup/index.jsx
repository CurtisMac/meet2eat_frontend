import React, { Component } from 'react';
// import axios from 'axios'
import PickedResto from './PickResto'
import PickedTime from './PickedTime'
// import Confirm from './Confirm'
import Complete from './Complete'

export default class CreateMeetup extends Component {
  constructor() {
    super()
    this.state = {
      ListResto: [],
      PickedResto: {},
      StartTime: '',
      EndTime: '',
      // CreatedBy:this.props.user.name
      step: 1
    }
    this.apiCreat = ''
  }

  pickedResto = (input) => {

    this.setState({
      step: 2,
      PickedResto: input
    })

  }

  pikedTime = (start, end) => {
    this.setState({
      step: 3,
      StartTime: start,
      EndTime: end
    })


  }

  confirm = () => {
    let data = {
      restaurant:this.state.pickedResto,
      start:this.state.StarTime,
      end:this.state.EndTime,
      createdby:this.state.CreatedBy
    }

    // axios.post(this.apiCreat,data).then((res)=>{

    // })
  }


  render() {
    if (this.state.step === 1) {
      return (
        <div className="profile">
          <PickedResto 
          pickedResto={this.pickedResto}
          />
        </div>
      )
    }
    if (this.state.step === 2) {
      return (
        <div className="profile">
          <PickedTime 
          pikedTime={this.pikedTime}
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

