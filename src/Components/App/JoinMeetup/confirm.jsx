import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Confirm extends Component {



    render() {
        return (
            <div className="confrimMeet">
                <h3 className="center-align">Almost there!</h3>
                <h4 className="center-align">Confirm the details below:</h4>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src="/noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />
                            insert rating</p><br />
                        <p> at 2pm</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">restaurant_menu</i></a>
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