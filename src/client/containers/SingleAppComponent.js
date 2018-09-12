import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getUser } from '../action/index';
// import { bindActionCreators } from 'redux';
import LoginPage from '../components/loginPage';
import MainPage from '../components/mainPage'

import { loginMode } from '../reducers/applicationMode';
class SinglePageApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.applicationMode) {
            case loginMode:
                return (<LoginPage />)

            default:
                return (<MainPage />)
        }
    }
}

function mapStateToProps({ applicationMode }) {
    return { applicationMode };
}

export default connect(mapStateToProps)(SinglePageApp);