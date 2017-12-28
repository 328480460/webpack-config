import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './index.css';
import './index.less'

import {a} from './chunck1';
import {b} from './chunck2';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1 >wdsdwwww2xxxxx2</h1>
                <img src={require('./miku.jpg')}/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>, document.getElementById('root'))

if (module.hot) {
    module
        .hot
        .accept(() => {
            ReactDom.render(
                <App/>, document.getElementById('root'))
        })
}