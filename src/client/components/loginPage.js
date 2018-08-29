import React, { Component } from 'react';


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: ''
        }

        this.onChage = this.onChage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChage(field, e) {
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

    }
    render() {
        return (
            <div>
                <div>Login Page</div>
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="col-sm-2 control-label">Username</label>
                        <div className="col-sm-10">
                            <input key="user" type="text" className="form-control" id="username" placeholder="Username" onChange={this.onChage.bind(this, 'username')} value={this.state.user} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                            <input key="password" type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={this.onChage.bind(this, 'password')} value={this.state.password} />
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

export default LoginPage;