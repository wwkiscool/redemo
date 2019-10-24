import React, { Component } from 'react';

import Header from '../../../common/header.jsx'

import styles from './calendar.module.css'
import leftUrl from '../../../assets/me/left.png';
import rightUrl from '../../../assets/me/right.png';
class calendar extends Component {
  constructor() {
    super();
    this.state = {
      datetop:'2019-10',
      year: '',
      month: '',
      day: '',
      datelist: [],
      style: styles
    }
  }
  componentWillMount () {
    this.initData();
  }
  initData = () => {
    let year  = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let datetop = year + '年' + month + '月'
    let totalNum = this.dayInMonth(year,month);
    console.log('1',totalNum,'2',month)
    let datelist = [];

    // 获取某月的1号是星期几
    // let dayShow = new Date(year, month, 1).getDay();
    let theday = new Date().setDate(1);
    let week = new Date(theday).getDay();
    console.log('从第几天开始',week)
    for(let i = 1; i <= totalNum + week; i++ ) {
      if (i > week) {
        let obj = {
          num: i - week,
          name: 'circle'
        }
        datelist.push(obj)
      } else {
        let obj = {
          num: '',
          name: 'empty'
        }
        datelist.push(obj)
      }
    }
    this.setState({
      year: year,
      month: month,
      day: day,
      datetop:datetop,
      datelist: datelist
    })
  }
  goBack = () => {
    console.log('1',styles)
  }
  // 获取上个月一共有多少天
  prevDay = () => {
    let year = this.state.year;
    let month = this.state.month;
    // if (month)
    let Day = new Date(year,month-1,0).getDate();
    return Day;
  }
  // 获取下个月一共有多少天
  nextDay = () => {
    let year = this.state.year;
    let month = this.state.month;
    // if (month)
    let Day = new Date(year,month+1,0).getDate();
    return Day;
  }
  // 日历
  dayInMonth = (month, year) => {
    // 某月的第0天就是上一个月的总天数
    return new Date(year, month, 0).getDate()
  }
  render() {
    return (
      <div>
        <Header title='日历' goBack={this.goBack.bind(this)}></Header>
          <div className={styles.Mcalendar}>
            <div className={styles.datemain}>
              <div className={styles.dateTop}>
                <div className={styles.dateimgA}>
                  <img src={leftUrl} alt="left" className={styles.imgA} />
                </div>
                <p className={styles.thep}>{this.state.datetop}</p>
                <div className={styles.dateimgB}>
                  <img src={rightUrl} alt="right"  className={styles.imgB} />
                </div>
              </div>
            </div>
            <div className={styles.dateWeek}>
              <div className={styles.everyDay}>日</div>
              <div className={styles.everyDay}>一</div>
              <div className={styles.everyDay}>二</div>
              <div className={styles.everyDay}>三</div>
              <div className={styles.everyDay}>四</div>
              <div className={styles.everyDay}>五</div>
              <div className={styles.everyDay}>六</div>
            </div>
            <div className={styles.dateDay}>
              {
                this.state.datelist.map(item => 
                  <div className={this.state.style.everyDay} key={item.num}>
                    <div className={item.name}>{item.num}</div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
    );
  }
}
export default calendar;