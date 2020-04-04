import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import imgUrl from '../assets/login/first-welcome.png'
import userUrl from '../assets/login/first-persen.png'
import passwordUrl from '../assets/login/first-lock.png'
import backUrl from '../assets/login/first-back.png'
import { InputItem, Modal, WhiteSpace } from 'antd-mobile';

// import { createBrowserHistory } from 'history'; // 如果是history路由
// import { createHashHistory } from 'history'; // 如果是hash路由
import axios from '../utils/axiosUtils'
import './login.module.css'
// import axios from 'axios'
import 'antd-mobile/dist/antd-mobile.css';
import wwk from '../utils/wwk'
// 登录

// const history = createBrowserHistory();
// const hash = createHashHistory()
class login extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      password: '',
      visible: false,
      message: ''
    }
  };
  Submit = async () => {
    console.log('0', wwk.client, '1', window.navigator.userAgent, '2', window.navigator.platform)
    if (!this.state.userId || !this.state.password) {
      let message = '请输入账号或密码'
      this.showModal(message);
    } else {
      let response = await axios.post('api/users/selectOne', {
        userCode: this.state.userId,
        passWord: this.state.password
      })
      console.log('1', response)
      let code = response.data.code;
      if (code === '200') {
        // history.push('/me/calendar');
        // hash.push('/me/calendar')
        this.props.history.push("/me/calendar");
      }
    }
  }
  showModal = (val) => {
    console.log(val)
    this.setState({
      visible: true,
      message: val
    })
  }
  handleOk = () => {
    this.setState({
      visible: false
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  firstInput = (e) => {
    console.log('1', e)
    this.setState({
      userId: e
    })
  }
  secondInput = (e) => {
    console.log('1', e)
    this.setState({
      password: e
    })
  }
  render() {
    return (
      <div className='login-wrapper' style={loginStyle.wrapper}>
        <div className='login-background' style={loginStyle.bac}>
          <img src={imgUrl} alt='1' style={loginStyle.bacimg} />
        </div>
        <div className='login-flexbox' style={loginStyle.flexbox}>
          <div className='login-firstinput' style={loginStyle.firstinput}>
            <InputItem placeholder='请输入用户名' style={loginStyle.Input} onChange={this.firstInput} type='text' />
            <img src={userUrl} alt='2' style={loginStyle.firstinputImg} />
          </div>
          <div className='login-secondinput' style={loginStyle.secondInput}>
            <InputItem placeholder='请输入密码' style={loginStyle.Input} onChange={this.secondInput} type='password' />
            <img src={passwordUrl} alt='3' style={loginStyle.secondinputImg} />
          </div>
        </div>
        <div className='login-btnBox' style={loginStyle.btnBox}>
          <button onClick={this.Submit} style={loginStyle.submitBtn}>确 定</button>
        </div>
        <div className='login-bottomBox' style={loginStyle.bottomBox}>
          {/* <div className='register'>用户注册</div> */}
          <Link to={`/register`} className="login-current">用户注册</Link>
          <i></i>
          <div className='login-abort' style={loginStyle.abort}>关于我们</div>
        </div>
        <div className='login-me' style={loginStyle.me}>欢迎进入ihy's world</div>
        <WhiteSpace />
        <Modal
          title='提示'
          transparent
          visible={this.state.visible}
          bodyStyle={bodyStyle}
          // okText='确认'
          centered={true}
          closable={false}
          width='70%'
          destroyOnClose={true}
          // footer={[
          //   <button key="submit" type="primary" onClick={this.handleOk}>确认</button>
          // ]}
          footer={[{ text: '确 定', onPress: () => { console.log('ok'); this.handleOk(); } }]}
        >
          {this.state.message}
        </Modal>
      </div>
    );
  }
}

const loginStyle = {
  wrapper: { height: '100%' },
  bac: {
    background: `url('${backUrl}') no-repeat`,
    backgroundSize: 'cover',
    position: 'relative',
    height: '300px'
    // ':before': {
    //   content:'',
    //   display: 'block',
    //   paddingTop:'70%'
    // }
  },
  bacimg: {
    position: 'absolute',
    left: '20px',
    top: '50px',
    width: '120px',
    height: '20px'
  },
  flexbox: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 40px 40px 40px'
  },
  firstinput: {
    width: '100%',
    paddingBottom: '20px',
    position: 'relative'
  },
  firstinputImg: {
    position: 'absolute',
    width: '15px',
    height: '15px',
    left: '13px',
    top: '16px'
  },
  secondInput: {
    width: '100%',
    position: 'relative'
  },
  secondinputImg: {
    position: 'absolute',
    width: '15px',
    height: '15px',
    left: '13px',
    top: '16px'
  },
  btnBox: {
    height: '40px',
    textAlign: 'center',
    fontSize: '20px'
  },
  submitBtn: {
    width: '200px',
    height: '40px',
    lineHeight: '40px',
    background: '#19c9b4',
    color: '#fff',
    border: 'none',
    borderRadius: '20px'
  },
  bottomBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '100px',
    position: 'fixed',
    margin: '0 auto',
  },
  abort: {
    paddingLeft: '20px',
    textDecoration: 'underline'
  },
  me: {
    width: '100%',
    position: 'fixed',
    bottom: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '1.5px',
  },
  Input: {
    paddingLeft:'20px',
  }
}
const bodyStyle = {
  // 弹出框的样式
  textAlign: 'center'
}
export default login