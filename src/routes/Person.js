import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './person/Login';
import Tip from './person/Tip';
import Info from './person/info';
import Register from './person/Register';
/*import */
import { checkLogin } from '../api/person';
import '../static/css/person.less';

class Person extends React.Component {
  constructor(props, context) {
    super(props, context);
    // => STATE
    this.state = {
      isLogin: false,
    };
  }

//=> 验证是否登录
  async componentWillMount() {
    let isLogin = 1 === 0 ? true : false;
    this.setState({
      isLogin,
    });
  }

  render() {
    return <section>
      <Switch>
        {/*路由的校验是同步的不允许在校验中出现异步，因为这样在异步没有完成之前根本不知道怎么渲染，语法不支持这样的操作*/}
        <Route path='/person/info' render={() => {
          if (this.state.isLogin) {
            return <Info />;
          }
          return <Tip />;
        }} />
        <Route path='/person/login' component={Login} />
        <Route path='/person/register' component={Register} />
        <Redirect from='/person' to='/person/info' />
      </Switch>
    </section>;
  }
}

export default connect()(Person);
