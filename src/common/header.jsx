import React, { Component } from 'react';
import backUrl from '../assets/common/back.png'


import styles from './header.module.css'
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      message: ''
    }
  }

  // 父组件调用次方法 
  
  children = () => {
    this.props.goBack();
  } 
  componentDidMount() {
    // this.props.onRef(this)
  }
  render() {
    return(
      <div className={styles.header}>
        <div className={styles.headerTitle}>{this.props.title}</div>
        <img src={backUrl} className={styles.headerImage} alt='1' onClick={this.children.bind(this)} />
        <div style={{display:this.props.message?'block':'none'}}>{this.props.message}</div>
      </div>
    )
  }
}

export default Header