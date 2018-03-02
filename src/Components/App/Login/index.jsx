import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="logIn">
                <h2 className="center-align">Start Here</h2>
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="username" id="first_name" type="text" class="validate" />
                            <label for="first_name">Enter Username</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <a type="submit" name="action" className="btn btn-large">Go!</a>
                </form>
            </div>
        );
    }
}

export default Login;