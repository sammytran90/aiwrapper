import React, {Component} from "react";
import {hot} from 'react-hot-loader';
import{withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class UserList extends Component{
    renderList(){
        return this.props.users.map((user)=>{
            return(
                <li>{user.id}</li>
            );
        });
    }
    render(){
        return(
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);
// export default hot(module)(main);