import React, { Component } from 'react';
import './me.scss'

// import plupload from 'plupload'

import left from '../../assets/me/left.png'
import right from '../../assets/me/right.png'
import defaultAvatar from '../../assets/ta/avatar.jpg'
import axios from '../../utils/axiosUtils'
import HeaderComponent from '../../common/header/header'
import Tab from '../../common/tab/tab'
import SwiperComponent from '../../common/swiper/index'

export default class me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: 'wwww',
      info: '123',
      tabData: [
        {
          name: '游戏',
          id: 1,
          activity: true
        },
        {
          name: '电影',
          id: 2,
          activity: false
        },
        {
          name: '娱乐',
          id: 3,
          activity: false
        },
        {
          name: '小说',
          id: 4,
          activity: false
        },
        {
          name: '情感',
          id: 5,
          activity: false
        },
      ],
      swiperData: [
        {
          url: "https://rccp-dfs.oss-cn-beijing.aliyuncs.com/carousel/pic/云资料.jpg",
          id: 1
        }, {
          url: "https://rccp-dfs.oss-cn-beijing.aliyuncs.com/carousel/pic/考勤打卡.jpg",
          id: 2
        },
        {
          url: "https://rccp-dfs.oss-cn-beijing.aliyuncs.com/carousel/pic/人才市场.jpg",
          id: 3
        }
      ]
    }
  }
  componentDidMount() {
    // 暂时不登录 
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <HeaderComponent title="我的" backText="返回"></HeaderComponent>
        <Tab tabData={this.state.tabData}></Tab>
        <SwiperComponent swiperData={this.state.swiperData}></SwiperComponent>
      </div>
    )
  }
}