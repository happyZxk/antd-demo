import React, {Component} from 'react';
import {Button} from 'antd';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Login</h1>
            <Button onClick={()=>{this.props.history.replace('/')}}>登录</Button>

        </div>)
    }
}
