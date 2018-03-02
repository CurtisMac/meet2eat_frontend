import React, { Component } from 'react';


export default class Pickedtime extends Component {



  render() {
    return (
      <div className="pickTime">
        <h3 className="center-align">Pick a time</h3>
        <h3 className="center-align"><i className="large material-icons">access_time</i></h3>
        <div className="row">
          <form className="col s12" ref={self => this.time = self} >
            <div className="row">
              <div className="input-field col s12">
                <input id="timer" type="text" name="start"/>
                <label className="bodyText" htmlFor="timer" >Start Time</label>
              </div>
              <div className="input-field col s12" >
                <input id="timer" type="text" name="end"/>
                <label className="bodyText" htmlFor="timer">End Time</label>
              </div>
              <a onClick={(e) => {
            e.preventDefault
            this.props.pikedTime(this.time.start, this.time.end)
          }}className="btn btn-large">submit</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
