import React, { Component } from 'react';
// import axios from 'axios'
import PickedResto from './PickResto'
import PickedTime from './PickedTime'
import Confirm from './Confirm'
import Complete from './Complete'

class CreateMeetup extends Component {
  constructor (){
    super()
    this.state={
      ListResto:[],
      PickedResto:{},
      StartTime:'',
      EndTime:'',
      // CreatedBy:this.props.user.name
      step:1
    }
    this.apiCreat = ''
  }

  pickedResto=(input)=>{


  }

  pikedTime=(start, end)=>{

  }

  confirm=()=>{

    // axios.post(this.apiCreat, ).then((res)=>{

    // })
  }

  changestep=()=>{


  }
    render() {
      if(this.state.step===1){
        return (
          <div className="profile">
          <PickedResto />
          </div>
      )
      }
      if(this.state.step===2){
        return (
          <div className="profile">
          <PickedTime />
          </div>
      )
      }

      if(this.state.step===3){
        return (
          <div className="profile">
          <Complete />
          </div>
      )
      }
       
    }
}

export default CreateMeetup;