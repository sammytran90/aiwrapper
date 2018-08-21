import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { selectUser } from '../action/index';
import { bindActionCreators } from 'redux';

class UserList extends Component {
    renderList() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={()=>this.props.selectUser(user)}
                >{user.id}</li>
            );
        });
    }
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserList);
// export default hot(module)(main);