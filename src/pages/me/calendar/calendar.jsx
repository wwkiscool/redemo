import React, { Component } from 'react';

import Header from '../../../common/header.jsx'

import styles from './calendar.module.css'
import leftUrl from '../../../assets/me/left.png';
import rightUrl from '../../../assets/me/right.png';
import moment from 'moment';


class calendar extends Component {
  constructor() {
    super();
    this.state = {
      datetop:'',
      year: '',
      month: '',
      day: '',
      datelist: [],
      style: styles,
      date: new Date(),
      heart:`❤`
    }
  }
  componentDidMount () {
    this.initData();
    this.timer = setInterval(()=> this.tick(), 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  zeroFill = (num) => {
    num = Number(num);
    num = num < 10 ? '0' + num : num;
    return num;
  }
  
  initData = (val) => {
    let year  =this.state.year || new Date().getFullYear();
    let month = this.state.month || new Date().getMonth() + 1;
    let day = this.state.day || new Date().getDate();
    let datetop = year + '年' + month + '月'
    let totalNum = this.dayInMonth(year,month);
    if(month == 2){
      if(year % 100 ===0 || year % 400 === 0 || year % 4 === 0){
        day = 29
      } else {
        day = 29
      }
    }
    let dateTemp = new Date(`${year}-${month}-${day}`).getTime()
    
    let datelist = [];

    // 获取某月的1号是星期几
    // let dayShow = new Date(year, month, 1).getDay();
    let theday = ''
    if (val) {
      theday = new Date(val).setDate(1);
    } else {
      theday = new Date().setDate(1);
    }
    
    let week = new Date(theday).getDay();
    console.log('从第几天开始',week)
    for(let i = 1; i <= totalNum + week; i++ ) {
      if (i > week) {
        let one = [];
        one.push(year);
        one.push(this.zeroFill(month));
        one.push(this.zeroFill(i - week));
        let now = moment(dateTemp).format('YYYY-MM-DD');
        let className = ''
        if (
          one[0] == new Date(now).getFullYear() &&
          one[1] == new Date(now).getMonth() + 1 &&
          one[2] == new Date(now).getDate()
        ) {
          className += 'on'
        }
        let obj = {
          num: i - week,
          name: 'circle',
          circle: true,
          className: className
        }
        datelist.push(obj)
      } else {
        let obj = {
          num: '',
          name: 'empty',
          circle:false,
          className: 'disabled'
        }
        datelist.push(obj)
      }
    }
    this.setState({
      year: year,
      month:month,
      day:day,
      datetop: datetop,
      datelist: datelist
    })
  }
  goBack = () => {
    this.props.history.push("/");
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
  prevMonth = () => {
    // 上个月的日期
    console.log(this.state)
    let month = this.state.month - 1 === 0 ? 12 : this.state.month - 1 
    let year = this.state.month - 1 === 0 ? this.state.year - 1 :this.state.year;
    console.log("1", month, '2', year);
    this.setState({
      year: year,
      month: month,
      // datetop: year + '年' + month + '月' 
    },()=>{
      let val = year+ '-' + month 
    console.log('2', val)
    console.log('3', this.state)
    this.initData(val);
    });
    
  }
  nextMonth = () => {
    // 下个月的日期console.log(this.state)
    let month = this.state.month === 12 ? 1 : this.state.month + 1 
    let year = this.state.month + 1 === 12 ? this.state.year + 1 :this.state.year;
    console.log("1", month, '2', year);
    this.setState({
      year: year,
      month: month,
      datetop: year + '年' + month + '月'
    },()=>{
      let val = year+ '-' + month 
    console.log('2', val)
    console.log('3', this.state)
    this.initData(val);
    })
  }
  // 日历
  dayInMonth = (year, month) => {
    // 某月的第0天就是上一个月的总天数
    return new Date(year, month, 0).getDate()
  }
  render() {
    return (
      <div>
        <Header title='日历' goBack={this.goBack.bind(this)}></Header>
        
          <div className={styles.Mcalendar}>
          <div className={styles.time}>{ this.state.heart + ' ' + this.state.date.toLocaleTimeString() + ' ' + this.state.heart}</div>
            <div className={styles.datemain}>
              <div className={styles.dateTop}>
                <div className={styles.dateimgA} onClick={this.prevMonth}>
                  <img src={leftUrl} alt="left" className={styles.imgA} />
                </div>
                <p className={styles.thep}>{this.state.datetop}</p>
                <div className={styles.dateimgB} onClick={this.nextMonth}>
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
                this.state.datelist.map((item, index) => 
                <div key={index} className={`${item.className?this.state.style.on:this.state.style.disabled}`}>
                  <div  className={this.state.style.everyDay}>
                    <div className={`${item.circle?this.state.style.circle: ''}`}>{item.num}</div>
                  </div>
                </div>
                )
              }
            </div>
            
            {/* <div>{this.state.heart}</div> */}
              
            
          </div>
        </div>
    );
  }
}
export default calendar