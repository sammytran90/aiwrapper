import React, { Component } from 'react';
import Menu from '../containers/menu';
import Content from '../containers/content';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Menu />
                    </div>
                    <div className="col-9">
                        <Content />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;