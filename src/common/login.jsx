import React, { Component } from 'react';

import './login.css'
import {Input, Button} from 'antd';
// 登录
class login extends Component {
  constructor(){
    super();
    this.state= {
      userId: '',
      password: ''
    }
  };
  Submit = () => {
    if (this.state.userId || this.state.password) {

    } else {
      alert(1)
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='background'></div>
        <div>
          <Input placeholder='请输入用户名' value={this.state.userId} />
          <Input placeholder='请输入密码' value={this.state.password} />
        </div>
        <div>
          <button onClick={this.Submit}>确定</button>
        </div>
      </div>
    );
  }
}

export default login;