import React, { Component } from 'react';
import './me.scss'

// import plupload from 'plupload'

import left from '../../assets/me/left.png'
import right from '../../assets/me/right.png'
import defaultAvatar from '../../assets/ta/avatar.jpg'
import axios from '../../utils/axiosUtils'
import HeaderComponent from '../../common/header/header'
import Tab from '../../common/tab/tab'

export default class me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: 'wwww',
      info: '123',
      tabData:[
        {
          name:'游戏',
          id:1,
          activity: true
        },
        {
          name:'电影',
          id:2,
          activity: false
        },
        {
          name:'娱乐',
          id:3,
          activity: false
        },
        {
          name:'小说',
          id:4,
          activity: false
        },
        {
          name:'情感',
          id:5,
          activity: false
        },
      ]
    }
  }
  componentDidMount() {
    // 暂时不登录 
  }

  render() {
    return (
      // <div className='me-header'>
      //   <div className='img-background'>
      //     <div className='top-icon'>
      //       <img src={left} alt="left" />
      //       <img src={right} alt="right" />
      //     </div>
      //     <div className='avatar'>
      //       <div className='left'>
      //         <div className='headerimg' id='user-photo'>
      //           <img src={this.state.avatar ? this.state.avatar : defaultAvatar} alt="avatar" />
      //         </div>

      //         <div className='perInfo'>
      //           <div className='firstinfo'>
      //             {this.state.name}
      //           </div>
      //           <div className='secondinfo'>
      //             {this.state.info}
      //           </div>
      //         </div>
      //       </div>
      //       <div className='right'>
      //         个人主页
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div  className="main-viewport">
        <HeaderComponent title="我的" backText="返回"></HeaderComponent>
        <Tab tabData={this.state.tabData}></Tab>
      </div>
    )
  }
}