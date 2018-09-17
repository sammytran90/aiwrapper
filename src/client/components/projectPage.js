import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { dispatch_msg } from '../action/user.action';

import { CREATE_PROJECT, FETCH_PROJECT } from '../action/user.action';


class ProjectPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newProjectName: '',
            error: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.fetchProject = this.fetchProject.bind(this);
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
        }
    }

    onChange(e) {
        this.setState({ newProjectName: e.target.value })
    }

    fetchProject(projectName) {
        var selectedProject = this.state.projects.filter(v => v.project_name == projectName)[0];
        if (!!selectedProject) {
            this.props.dispatch_msg({
                type: FETCH_PROJECT,
                payload: selectedProject
            })
        }
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
                            this.user.projects.map(name => {
                                return <li key={name} onClick={this.fetchProject(name)}>{name}</li>
                            })}
                    </ul>
                </div>
            </div>
        )
    }
}

var mapDispatchToProps = (dispatch) => bindActionCreators({ dispatch_msg: dispatch_msg }, dispatch)
export default connect(null, mapDispatchToProps)(ProjectPage);