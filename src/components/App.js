import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Sup from './SupComponent';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="h1">
                    Hello worldz!
            </h1>
                <Sup sup={'\'sup? world!'} />
            </div>
        );
    }
}

export default hot(App);