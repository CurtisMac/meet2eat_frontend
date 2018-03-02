import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Confirm extends Component {



    render() {
        return (
            <div className="confrimMeet">
                <h3 className="center-align">Almost there!</h3>
                <h4 className="center-align">Confirm the details of your meetup: </h4>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src={this.props.PickedResto.featured_image} alt="" className="circle" />
                        <span className="title">{this.props.PickedResto.name}</span>
                        <p>{this.props.PickedResto.location.address}<br />
                            {this.props.PickedResto.user_rating.rating_text}</p><br />
                        <p>Start Time: {this.props.StartTime} pm</p>
                        <a href={this.props.PickedResto.menu_url} className="secondary-content"><i className="material-icons">restaurant_menu</i></a>
                    </li>
                </ul>
                        <div className="buttons">
                            <a className="btn btn-large" onClick={()=>{this.props.back()
                                }}>back</a>
                            <Link to="/complete" className="btn btn-large" onClick={()=>{
                                this.props.confirm()
                                }}>confirm</Link>
                        </div>
            </div>
                    );
                }
}