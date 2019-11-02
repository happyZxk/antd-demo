import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'

export default class RoutingMatching extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
