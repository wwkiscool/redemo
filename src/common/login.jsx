import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './login.css'
import imgUrl from '../assets/login/first-welcome.png'
import userUrl from '../assets/login/first-persen.png'
import passwordUrl from '../assets/login/first-lock.png'
import {Input, Modal} from 'antd';
// import axios from '../utils/axiosUtils'
import axios from 'axios'

import wwk from '../utils/wwk'
// 登录
class login extends Component {
  constructor(){
    super();
    this.state= {
      userId: '',
      password: '',
      visible: false,
      message: ''
    }
  };
  Submit = async () => {
    console.log('0',wwk.client,'1', window.navigator.userAgent, '2',window.navigator.platform)
    if (!this.state.userId || !this.state.password) {
      let message = '请输入账号或密码'
      this.showModal(message);
    } else {
      let response = await axios.post('/api/users/selectOne',{
        userCode: this.state.userId,
        password: this.state.password
      })
      console.log('1', response)
    }
  }
  showModal = (val) => {
    this.setState({
      visible:true,
      message: val
    })
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false
    })
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible:false
    })
  }
  firstInput = (e) => {
    console.log('1', e.target.value)
    this.setState({
      userId: e.target.value
    })
  } 
  secondInput = (e) => {
    console.log('1', e.target.value)
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-background'>
          <img src={imgUrl} alt='1' />
        </div>
        <div className='login-flexbox'>
          <div className='login-firstinput'>
            <Input placeholder='请输入用户名' onChange={this.firstInput} type='text' />
            <img src={userUrl} alt='2' />
          </div>
          <div className='login-secondinput'>
            <Input.Password placeholder='请输入密码' onChange={this.secondInput} type='text' />
            <img src={passwordUrl} alt='3' />
          </div>
        </div>
        <div className='login-btnBox'>
          <button onClick={this.Submit}>确定</button>
        </div>
        <div className='login-bottomBox'>
          {/* <div className='register'>用户注册</div> */}
          <Link to={`/register`} activeClassName="login-current">用户注册</Link>
          <i></i>
          <div className='login-abort'>关于我们</div>
        </div>
        <div className='login-me'>欢迎进入ihy's world</div>
        <Modal
          title='提示'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.state.message}
        </Modal>
      </div>
    );
  }
}

export default login;