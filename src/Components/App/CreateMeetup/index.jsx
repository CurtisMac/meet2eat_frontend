import React, { Component } from 'react';
// import axios from 'axios'


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
        return (
            <div className="profile">
              test
            </div>
        );
    }
}

export default CreateMeetup;