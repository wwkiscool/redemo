import React, { Component } from 'react';
import { Card, WhiteSpace, ListView } from 'antd-mobile'
import styles from './channelContent.module.css'
export default class channelContent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      data1: [
        {
          title: 'vue',
          key: '1',
          description: '语言',
          img: '',
          message: '开发程序开发程序开发程序开发程序开发程序开发程序开发程序',
          scan: 100,
          approve: 20
        }, {
          title: 'vue',
          key: '1',
          description: '语言',
          img: '',
          message: '开发程序开发程序开发程序开发程序开发程序开发程序开发程序',
          scan: 100,
          approve: 20
        }, {
          title: 'vue',
          key: '1',
          description: '语言',
          img: '',
          message: '开发程序开发程序开发程序开发程序开发程序开发程序开发程序',
          scan: 100,
          approve: 20
        }, {
          title: 'vue',
          key: '1',
          description: '语言',
          img: '',
          message: '开发程序开发程序开发程序开发程序开发程序开发程序开发程序',
          scan: 100,
          approve: 20
        }, {
          title: 'vue',
          key: '1',
          description: '语言',
          img: '',
          message: '开发程序开发程序开发程序开发程序开发程序开发程序开发程序',
          scan: 100,
          approve: 20
        }
      ],
      finished: false, // 是否加载完毕
      isFoot: true  // 阻止用户频繁上拉调接口
    };
    this._page = 1;
    this._page_size = 5;
    this.startx = '';
    this.starty = '';
  }
  componentDidMount() {

  }
  onTouchStart = (e) => {
    console.log('2', e)
    e.persist()
    this.startx = e.touches[0].pageX;
    this.starty = e.touches[0].pageY;
  }
  onTouchEnd(e) {
    e.persist()
    let endx, endy;
    console.log('1', e)
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    let direction = this.getDirection(this.startx, this.starty, endx, endy)
    switch (direction) {
      case 0:
        console.log('未滑动')
        break;
      case 1:
        console.log("向上！");
        this.loadData();
        break;
      case 2:
        console.log("向下！");
        break;
      case 3:
        console.log("向左！");
        break;
      case 4:
        console.log("向右！");
        break;
      default:
        break;
    }
  }
  // 触摸点和离开点连线与x轴角度
  getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
  }
  //根据接触和离开判断方向 1向上 2向下 3向左 4向右 0未发生滑动（[Math.abs][4]）
  getDirection(startx, starty, endx, endy) {
    let angx = endx - startx;
    let angy = endy - starty;
    let result = 0;
    // 如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
      return result
    }
    let angle = this.getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
      result = 1;
    } else if (angle > 45 && angle < 135) {
      result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;
    } else if (angle >= -45 && angle <= 45) {
      result = 4;
    }

    return result;
  }
  //**向上滑动时（在这里才真正的判断是否到最底部）**
  loadData() {
    console.log("数据的高-------------------------", this.refs.onPullUp.clientHeight);
    console.log("滚动的高------------------------", document.documentElement.scrollTop);
    console.log("滚动的高------------------------", document.body.scrollTop);
    console.log("屏幕的高------------------------", document.documentElement.clientHeight);
    let dataHeight = this.refs.onPullUp.clientHeight;
    let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
    let screenHeight = document.documentElement.clientHeight;
    const h = 10;//自定义距离底部多少时concat数据
    if (dataHeight - scrollHeight - h < screenHeight && this.state.isFoot) {
        this.setState({
            isFoot: false,
        });
        console.log("应该只显示1次");
        let params = {
            value: this.val,
            page_index: this._page,
            page_size: this._page_size,
        }
    }
}
  render() {
    return (
      <div onTouchStart={this.onTouchStart.bind(this)} ref="onPullUp" onTouchEnd={this.onTouchEnd.bind(this)}>
        {
          this.state.data1.map((item, index) => {
            return (
              <div key={index}>
                <WhiteSpace size="lg" />
                <Card full key={index}>
                  <Card.Header
                    title={item.title}
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>{item.description}</span>}
                  />
                  <Card.Body>
                    <div>{item.message}</div>
                  </Card.Body>
                  <Card.Footer content={<div>浏览{item.scan}</div>} extra={<div>点赞{item.approve}</div>} />
                </Card>
              </div>
            )

          })
        }
        <div>
          {/* {
            this.state.finished ? <span>我是有底线的</span> :
              recentReadList.list.length > 0 ? this.state.isFoot ? <span >上拉加载更多</span> : <ActivityIndicator text="请稍等..." /> :
                <span className='iconfont icon-taidu2'>暂无信息</span>
          } */}
        </div>
      </div>
    );
  }
}