import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectPage from './projectPage';
import Menu from '../containers/menu';
import Content from '../containers/content';


class MainPage extends Component {
    constructor(props) {
        super(props);


    }

    renderSwitch(user) {

        var projectNameArr = user.data.projects.map(v => v.project_name);
        if (!user.data.current_project) {
            return (<ProjectPage value={projectNameArr} />)
        } else {
            return (<Content />)
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Menu />
                    </div>
                    <div className="col-9">
                        {this.renderSwitch(this.props.user)}
                    </div>
                </div>
            </div>
        )
    }
}

var dispatchStateToProps = ({ user }) => { return { user } };

export default connect(dispatchStateToProps)(MainPage);