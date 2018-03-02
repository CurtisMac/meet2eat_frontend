import React, { Component } from 'react';


export default class Confirm extends Component {



    render() {
        return (
            <div className="confrimMeet">
                <h3>Almost there!</h3>
                <h4>Confirm the details below:</h4>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src="/noodles.jpeg" alt="" className="circle" />
                        <span className="title">Pholicious</span>
                        <p>insert address<br />
                            insert rrrating</p><br />
                        <p> at 2pm</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">restaurant_menu</i></a>
                    </li>
                </ul>
                <div className="buttons">
                    <a class="btn">back</a>
                    <a class="btn">confirm</a>
                </div>
            </div>
        );
    }
}