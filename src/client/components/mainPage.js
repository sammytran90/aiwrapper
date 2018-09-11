import React, { Component } from 'react';
import Menu from '../containers/menu';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-4">
                    <Menu />
                </div>
                <div className="col-xs-8">

                </div>
            </div>
        )
    }
}

export default MainPage;