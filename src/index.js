import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/router';//路由
import {Provider} from 'react-redux';
import store from './store/index'

/*IMPORT CSS*/
import './static/css/reset.min.css'
import './static/css/common.less'

ReactDOM.render(<Provider store={store}>
    <Router></Router>
</Provider>, document.getElementById('root'));
