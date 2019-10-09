import React, { Component } from 'react';

import './login.css'
import imgUrl from '../assets/login/first-welcome.png'
import userUrl from '../assets/login/first-persen.png'
import passwordUrl from '../assets/login/first-lock.png'
import {Input} from 'antd';
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
        <div className='background'>
          <img src={imgUrl} alt />
        </div>
        <div className='flexbox'>
          <div className='firstinput'>
            <Input placeholder='请输入用户名' value={this.state.userId} />
            <img src={userUrl} />
          </div>
          <div className='secondinput'>
            <Input placeholder='请输入密码' value={this.state.password} />
            <img src={passwordUrl} />
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