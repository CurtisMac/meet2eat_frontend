import React, { Component } from 'react';


export default class MeetupList extends Component {



    render() {
        return (

            <div className="meetList col s12">
                <h3 className="center-align">These are the meetups near you!</h3>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src="noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />insert meetup owner</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">group-add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src="noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />insert meetup owner</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">group_add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src="noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />insert meetup owner</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">group_add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src="noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />insert meetup owner</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">group_add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src="noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />insert meetup owner</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">group_add</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src="noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />insert meetup owner</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">group_add</i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

