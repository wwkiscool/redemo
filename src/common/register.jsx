import React, { Component } from 'react';

import Header from './header'
import { createBrowserHistory } from 'history'; // 如果是history路由
import { createHashHistory } from 'history'; // 如果是hash路由


const history = createBrowserHistory();
const hash = createHashHistory()
class register extends Component {
  goBack = () => {
    // alert(1)
    history.push('/');
    hash.push('/')
  }
  render() {
    return (
      <div className='register'>
        <Header title='ish register' goBack={this.goBack.bind(this)}></Header>
      </div>
    );
  }
}

export default register;