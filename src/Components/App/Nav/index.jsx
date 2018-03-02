import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul className="iconNav">
                        <li><Link to="/"><i className="material-icons">face</i></Link></li>
                        <li><Link to="/join"><i className="fas fa-utensils fa-2x"></i></Link></li>
                        <li><Link to="/create"><i className="material-icons">add</i></Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;