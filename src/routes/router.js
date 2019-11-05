import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// import Home from '../pages/Home'
// import Login from '../pages/Login'
import NavTop from '../component/NavTop';
import NavBottom from '../component/NavBottom';
import Home from './Home';
import Mycourse from './Mycourse';
import Person from './Person';

export default class RoutingMatching extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <ConfigProvider locale={zhCN}>
            <div>
              <NavTop />
              <main className='container'>
                <Switch>
                  <Route path="/course" exact component={Home}></Route>
                  <Route path="/mycourse" exact component={Mycourse}></Route>
                  <Route path="/person"  component={Person}></Route>
                  <Redirect from="/"
                            to="/course" />{/*<Redirect to="/course"/>*/}
                  <Redirect to="/?from=404"></Redirect>
                </Switch>
              </main>
              <NavBottom />
            </div>
          </ConfigProvider>
        </HashRouter>
      </div>
    );
  }
}
