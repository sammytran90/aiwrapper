import React, { Component } from 'react';
import UserList from '../containers/userList';

export default class SinglePageApp extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <UserList />
        );
    }
}