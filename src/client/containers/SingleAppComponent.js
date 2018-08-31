import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../action/index';
import { bindActionCreators } from 'redux';
import LoginPage from '../components/loginPage';
import MainPage from '../components/mainPage'

class SinglePageApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // switch (!this.props.user) {
        //     case true:
        return (<LoginPage />)

        //     default:
        //         return <MainPage />
        // }
        // console.log(this.props);
        // return (<div>123</div>)

    }
}

// function mapStateToProps({ user }) {
//     return { user };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ login: login }, dispatch);
// }

export default SinglePageApp;