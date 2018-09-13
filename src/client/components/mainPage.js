import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { dispatch_msg } from '../action/user.action';

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: this.props.data.projects,
            newProjectName: '',
            error: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        var projectName = this.state.newProjectName;
        if (projectName == '') {
            this.setState({ error: 'You must input projectname' });
        } else {
            this.props.dispatch_msg({
                type:
            })
        }
    }

    onChange(e) {
        this.setState({ newProjectName: e.target.value })
    }

    render() {
        return (
            <div>
                <div>Project Selection</div>
                <div>
                    <form class="form-inline" onSubmit={this.onSubmit}>
                        <div class="form-group mb-2">
                            <label for="staticEmail2" class="sr-only">Project Name</label>
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" placeholder="Your project name" onChange={this.onChange.bind(this)} value={this.state.newProjectName} />
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Create</button>
                    </form>
                </div>
                <div>
                    <ul>
                        {this.state.projects.map(v => {
                            return <li key={v.project_name}>{v.project_name}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

var mapStateToProps = ({ user }) => { return { user } };
var mapDispatchToProps = (dispatch) => bindActionCreators({ dispatch_msg: dispatch_msg })
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);