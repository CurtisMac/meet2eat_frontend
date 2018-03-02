import React, { Component } from 'react';


export default class PickedTime extends Component {
 
  

  render() {
    return (
      <div className="pickedTime">
        <h3 className="center-align">Pick a time</h3>
        <h3 className="center-align"><i className="large material-icons">access_time</i></h3>
        <div className="row">
          <form className="col s12" ref={self => this.TimeForm = self} onSubmit={(e) => { 
            e.preventDefault
            this.props.PickedTime(this.TimeForm) }}>
            <div className="row">
              <div className="input-field col s12">
                <input id="timer" type="text" />
                <label className="bodyText" for="timer">Time</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
