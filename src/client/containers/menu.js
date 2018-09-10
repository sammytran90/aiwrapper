import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import appModeSwitcher from '../action/app.action';

class Menu extends Component {
    constructor(props) {
        super(props)

    }



    renderList() {
        return this.props.menu.map((menuItem) => {
            return (
                <li
                    key={menuItem.title}
                    className="list-group-item"
                    onClick={() => this.props.appModeSwitcher(menuItem.mode)}>{menuItem.title}</li>
            )
        })

    }
    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}

var mapStateToProps = ({ menu }) => { return { menu } };

var mapDispatchToProps = (dispatch) => bindActionCreators({ appModeSwitcher: appModeSwitcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);