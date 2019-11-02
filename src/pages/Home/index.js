import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import http from '../../api';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "", post: {}
        }
    }
    render() {
        return (<div>
            <h1>HOME</h1>
            <Button onClick={() => {
                this.props.history.replace('/login')
            }}>退出</Button>
            <Button type="primary" onClick={this.start.bind()}>新建</Button>
            <div dangerouslySetInnerHTML={{__html: this.state.form}}></div>
            <div ref="formWarp"></div>
        </div>)
    }
    onChange(e) {//把当前修改的值赋入state
        this.setState({
            post: {
                ...this.state.post,
                [e.target.name]: e.target.value,
            }
        })
    }
    onSubmit(e) {
        // 阻止事件传递
        e.preventDefault();
        console.log("this.state.post", this.state.post);
        http.post('/Test/info', this.state.post)
            .then(response => {
                if (!response.status === 200) throw new Error();
                console.log("response", response);
            })
    }
    start = () => {
        let _self = this;
        let formWarp = this.refs.formWarp;
        // console.log("formWarp", formWarp, this.refs.formWarp.innerHTML = 55);
        http.post('/Test/start', {})
            .then(response => {
                if (!response.status === 200) throw new Error();
                console.log("response", response);
                // _self.refs.formWarp.innerHTML = response.data.data.scriptFormat
                console.log(React.createElement(response.data.data.scriptFormat));
                this.setState({
                    form: React.createElement(response.data.data.scriptFormat)

                })
            })
    }
}
