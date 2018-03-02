import React, { Component } from 'react';


export default class MeetupList extends Component {



    render() {
        let List = this.props.MeetupList.map((meetup)=>{
            return(
              <li className="collection-item avatar" onClick={()=>{ this.props.Pickedmeetup(meetup)}} >
                        <img src="noodles.jpeg" alt="" className="circle" />
                        <span className="title">{meetup.restaurant}</span>
                        <p>{meetup.address}<br />{meetup.username}</p>
                        <p>{meetup.start}<br />{meetup.end}</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">group_add</i></a>
                    </li>
            )
          })
        return (

            <div className="meetList col s12">
                <h3 className="center-align">These are the meetups near you!</h3>
                <p></p>
                <ul className="collection">
                    {List}
                </ul>
            </div>
        );
    }
}

