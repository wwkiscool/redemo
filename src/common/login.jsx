import React, { Component } from 'react';

import './login.css'
import imgUrl from '../assets/login/first-welcome.png'
import userUrl from '../assets/login/first-persen.png'
import passwordUrl from '../assets/login/first-lock.png'
import {Input} from 'antd';

import wwk from '../utils/wwk'
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
    console.log('0',wwk.client,'1', window.navigator.userAgent, '2',window.navigator.platform)
    if (this.state.userId || this.state.password) {

    } else {
      alert(1)
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='background'>
          <img src={imgUrl} alt='1' />
        </div>
        <div className='flexbox'>
          <div className='firstinput'>
            <Input placeholder='请输入用户名' value={this.state.userId} />
            <img src={userUrl} alt='2' />
          </div>
          <div className='secondinput'>
            <Input placeholder='请输入密码' value={this.state.password} />
            <img src={passwordUrl} alt='3' />
          </div>
        </div>
        <div className='btnBox'>
          <button onClick={this.Submit}>确定</button>
        </div>
      </div>
    );
  }
}

export default login;