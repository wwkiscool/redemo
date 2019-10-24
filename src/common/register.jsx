import React, { Component } from 'react';

import Header from './header'
// import { createBrowserHistory } from 'history'; // 如果是history路由
// import { createHashHistory } from 'history'; // 如果是hash路由
import {InputItem,Button,Modal} from 'antd-mobile'
// import axios from 'axios';
import axios from '../utils/axiosUtils'

// const history = createBrowserHistory();
// const hash = createHashHistory()
class register extends Component {
  constructor(){
    super();
    this.state= {
      userCode: '',
      password: '',
      visible: false
    }
  }
  goBack = () => {
    // alert(1)
    // history.push('/');
    // hash.push('/')
    this.props.history.push("/");
  }
  getUserid = (e) =>{
    this.setState({
      userCode: e.target.value
    })
  }
  getPassword = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  handleOk = () => {
    // history.push('/');
    // hash.push('/')
    this.props.history.push("/");
  }
  handleCancel = () => {

  }
  register = async () => {
    try {
      let response = await axios.post('/api/users/register',{
        userCode: this.state.userCode,
        password: this.state.password
      })
      let code = response.data.code;
      console.log('1',response)
      if (code === '200') {
        this.setState({
          visible:true,
          message:'注册成功,恭喜你可以开始了 gogo'
        })
      }
    } catch (error) {
      
    }
  }
  render() {
    return (
      <div className='register'>
        <Header title='ish register' goBack={this.goBack.bind(this)}></Header>
        <div style={registerStyle.firstInput}>
          <InputItem placeholder='请输入用户名' type='text' onChange={this.getUserid}></InputItem>
        </div>
        <div style={registerStyle.secondInput}>
          <InputItem placeholder='请输入密码' type='password' onChange={this.getPassword}></InputItem>
        </div>
        {/* <div>
          <Input></Input>
          <img src="" alt="验证码"/>
        </div> */}
        <div style={registerStyle.btn}>
          <Button onClick={this.register} style={registerStyle.thebtn}>注 册</Button>
        </div>
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
const registerStyle = {
  firstInput: {
    marginTop:'20px',
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 10%'
  },
  secondInput: {
    marginTop:'10px',
    width:'100%',
    padding: '0 10%',
    boxSizing: 'border-box',
  },
  btn: {
    width: '60%',
    margin:'10px auto',
    
  },
  thebtn: {
    background:'red',
    width:'100%',
    color: 'white'
  }
}

export default register;