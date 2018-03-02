import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="logIn">
                <h3 className="center-align">Start Here</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" />
                            <label htmlFor="username">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <a type="submit" name="action" className="btn btn-large">Go!</a>
                </form>
            </div>
        );
    }
}

export default Login;