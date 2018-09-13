import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { intentMode, entitiesMode } from '../reducers/applicationMode';

//components
import IntentPage from '../components/contents/intentPage';
import EntityPage from '../components/contents/entityPage';

class Content extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        switch (this.props.applicationMode) {
            case intentMode:
                return (<IntentPage />)
            case entitiesMode:
                return (<EntityPage />)
            default:
                return (
                    <div>Cannot access this page's content!! Please sign in!!!</div>
                );
        }
    }
}

var mapStateToProps = ({ applicationMode }) => { return { applicationMode } };

export default connect(mapStateToProps)(Content);