import React, { Component } from 'react';
import styles from './wo.module.css';
import {List} from 'antd-mobile'

import wrapperUrl from '../../assets/login/first-back.png'

export default class wo extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div style={{ zIndex: 101, background: '#f8f8f8', position: "relative" }}>
        <div className={styles.wrapper_img} style={styleConst.wrapperImg}>
          <div style={{ display: 'flex', padding: 20 }}>
            <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
              <img src={require("../../assets/ta/avatar.jpg")} alt="avatar" className={styles.avatar} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className={styles.name}>hasagei</div>
              <div className={styles.introduction}>简介:xxxxxxxxx</div>
            </div>
          </div>
          <div style={{ display: 'flex',boxSizing:'border-box', padding: '10px 0 20px 0', justifyContent: 'center', alignContent: 'center' }}>
            <div className={styles.personalMessage}>
              <div>1</div>
              <div>创作中心</div>
            </div>
            <div className={styles.personalMessage}>
              <div>1</div>
              <div>点赞</div>
            </div>
            <div className={styles.personalMessage}>
              <div>1</div>
              <div>收藏</div>
            </div>
            <div className={styles.personalMessage}>
              <div>1</div>
              <div>最近浏览</div>
            </div>
          </div>
        </div>
        <div style={{background:'#fff',display:'flex',justifyContent:"space-between",padding:20}}>
          <div>
            小游戏
          </div>
          <div>
            我的相册
          </div>
          <div>
            打卡
          </div>
          <div>
            其他
          </div>
        </div>
        <div style={{margin:"10px 0"}}>
          <List.Item
            arrow={'horizontal'}
          ><div style={{color:'#ccc'}}>关于我们</div></List.Item>
        </div>
      </div>
    );
  }
}
const styleConst = {
  wrapperImg: {
    background: `url('${wrapperUrl}') no-repeat`,
    backgroundSize: 'cover',
  }

}


