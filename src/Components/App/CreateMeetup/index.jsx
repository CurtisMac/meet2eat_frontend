import React, { Component } from 'react';
import axios from 'axios'
import PickedResto from './PickResto'
import AddTime from './AddTime'
import Confirm from './Confirm'
//import Complete from './Complete'

export default class CreateMeetup extends Component {
  constructor() {
    super()
    this.state = {
      ListResto: [],
      PickedResto: {},
      StartTime: '',
      EndTime: '',
      // CreatedBy:this.props.user.name
      step:1
    }
    // this.apiCreate='https://backend-m2e.herokuapp.com/'
    this.apiUrl1 = 'http://localhost:8080/'

  }

  componentWillMount = () => {
   let user = this.props.user
    axios.post(this.apiUrl1+'create', user).then((res) => {
    })

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
          <PickedResto
            pickedResto={this.pickedResto}
          />
        </div>
      )
    }
    if (this.state.step === 2) {
      return (
        <div className="profile">
          <AddTime
            pikedTime={this.pikedTime}
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

