import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getUser } from '../action/index';
// import { bindActionCreators } from 'redux';
import LoginPage from '../components/loginPage';
import MainPage from '../components/mainPage'

class SinglePageApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (!this.props.user) {
            case true:
                return (<LoginPage />)

            default:
                return (<MainPage />)
        }
    }
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps)(SinglePageApp);