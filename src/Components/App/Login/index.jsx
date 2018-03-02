import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Login extends Component {
    render() {
        return (
            <div className="logIn">
                <h3 className="center-align">Start Here</h3>
                <form className="col s12" ref={self => this.loginForm = self}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" name="username"/>
                            <label htmlFor="username">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <Link to='/' type="submit" name="login" className="btn btn-large" onClick={()=>{this.props.login(this.loginForm)}}>Go!</Link>
                </form>
            </div>
        );
    }
}

export default Login;