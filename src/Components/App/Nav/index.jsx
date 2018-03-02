import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <ul class="iconNav">
                        <li><a href="sass.html"><i className="material-icons">face</i></a></li>
                        <li><a href="badges.html"><i className="fas fa-utensils fa-2x"></i></a></li>
                        <li><a href="collapsible.html"><i className="material-icons">add</i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;