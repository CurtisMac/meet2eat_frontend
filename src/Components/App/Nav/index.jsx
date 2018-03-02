import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul className="iconNav">
                        <li><NavLink to="/"><i className="material-icons">face</i></NavLink></li>
                        <li><NavLink to="/join"><i className="fas fa-utensils fa-2x"></i></NavLink></li>
                        <li><NavLink to="/create"><i className="material-icons">add</i></NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;