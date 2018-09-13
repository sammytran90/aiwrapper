import React, { Component } from 'react';
import { connect } from 'react-redux';

class EntityPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}

var mapStateToProps = ({ user }) => { return { user } };

export default connect(mapStateToProps)(EntityPage);
