import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';

class NavTop extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <header className='headerNavBox'>
      {/*首页的导航*/}
      <div className='homeBox'>
        <div className='baseBox'>
          <h1 className='logo'>纯白设计</h1>
          <Icon onClick={this.toggleBar} className='icon' type='bars'
                style={{ fontSize: '.6rem' }} />
        </div>
        <ul className="filterBox" ref="filterBox">
          <li>全部设计</li>
          <li>REACT</li>
          <li>VUE</li>
          <li>小程序</li>
        </ul>
      </div>
    </header>;
  }

  toggleBar = () => {

    if (this.refs.filterBox.style.opacity == 1) {
      this.refs.filterBox.style.opacity = 0;
      this.refs.filterBox.style.visibility = 'hidden';
    } else {
      this.refs.filterBox.style.opacity = 1;
      this.refs.filterBox.style.visibility = 'visible';

    }
  };
}

export default withRouter(connect()(NavTop));
