import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, dispatch_msg } from '../action/user.action';
import { CHANGE_MODE } from '../action/app.action';
import { loginMode, projectMode, intentMode, entitiesMode } from '../reducers/applicationMode';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
            error: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(field, e) {
        switch (field) {
            case 'username':
                this.setState({ user: e.target.value });
                break;
            case 'password':
                this.setState({ password: e.target.value })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        var UserAndPassword = {
            username: this.state.user,
            password: this.state.password
        }

        this.props.login(UserAndPassword, (response) => {
            if (response.status == 200 && response.data) {
                this.props.dispatch_msg({
                    type: CHANGE_MODE,
                    payload: projectMode
                })
            } else {
                this.setState({ error: 'Login failed' });
            }
        });

    }
    render() {
        return (
            <div>
                <div>Login Page</div>
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="col-sm-2 control-label">Username</label>
                        <div className="col-sm-10">
                            <input key="user" type="text" className="form-control" id="username" placeholder="Username" onChange={this.onChange.bind(this, 'username')} value={this.state.user} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                            <input key="password" type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={this.onChange.bind(this, 'password')} value={this.state.password} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

var mapDispatchToProps = (dispatch) => bindActionCreators({ login: getUser, dispatch_msg: dispatch_msg }, dispatch);

export default connect(null, mapDispatchToProps)(LoginPage);
