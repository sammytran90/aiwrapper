import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import {
    withRouter
} from 'react-router-dom';

class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.UserChange = this.UserChange.bind(this);
        this.PasswordChange = this.PasswordChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    UserChange(e) {
        this.state.username = e.target.value;
        this.setState({ username: e.target.value })
    }

    PasswordChange(e) {
        this.state.password = e.target.value;
        this.setState({ password: e.target.value })
    }

    validate() {
        if (this.state.username == "" || this.state.password == "") {
            return false;
        }
        return true;
    }
    handleClick() {
        e.preventDefault();
        if(!this.validate()){
            return
        };
        
    }


    render() {
        return (
            <div>
                <p>login page</p>
                <form onSubmit={this.handleClick}>
                    <input placeholder="Username" onChange={this.UserChange} value={this.state.username} />
                    <input placeholder="Password" onChange={this.PasswordChange} value={this.state.password} />
                </form>
            </div>
        )
    }
}

export default hot(module)(login);