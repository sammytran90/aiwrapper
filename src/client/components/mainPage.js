import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { dispatch_msg } from '../action/user.action';

import { CREATE_PROJECT } from '../action/user.action';

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: props.user.data.projects,
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
        } else {
            this.props.dispatch_msg({
                type: CREATE_PROJECT,
                payload: projectName
            })
            this.setState({
                projects: this.props.user.data.projects
            })

        }
    }

    onChange(e) {
        this.setState({ newProjectName: e.target.value })
    }

    fetchProject(projectName) {

    }
    render() {
        return (
            <div>
                <div>Project Selection</div>
                <div>
                    <form className="form-inline" onSubmit={this.onSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="staticEmail2" className="sr-only">Project Name</label>
                            <input key="projectName" type="text" className="form-control-plaintext" id="staticEmail2" placeholder="Your project name" onChange={this.onChange.bind(this)} value={this.state.newProjectName} />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Create</button>
                    </form>
                </div>
                <div>
                    <ul>
                        {
                            this.state.projects.map(v => {
                                return <li key={v.project_name}>{v.project_name}</li>
                            })}
                    </ul>
                </div>
            </div>
        )
    }
}

var mapStateToProps = ({ user }) => { return { user } };
var mapDispatchToProps = (dispatch) => bindActionCreators({ dispatch_msg: dispatch_msg }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);