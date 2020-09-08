import React, { Component } from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default class DIYHeader extends Component {
  /**
   * 头部
   * 
   * @param{ default 全部自定义,backText, 返回文字, title 标题, rightContent, 右侧内容 }
   */
  // static propTypes = {
  //   title: this.propTypes.string.isRequired,
  //   signUp: PropTypes.bool,
  //   goBack: PropTypes.func,
  //   goHome: PropTypes.func,
  //   edit: PropTypes.func,
  //   userInfo: PropTypes.object.isRequired
  // }
  render() {
    let backText = '返回',
      title = '',
      rightContent;
      
      for (let item in this.props){
        if (this.props.backText && item == 'backText') {
          backText = this.props[item]
        } else if (this.props.title && item == 'title') {
          title = this.props[item]
        } else if (this.props.rightContent && item == 'rightContent') {
          rightContent = this.props[item]
        } else {

        }
      }
    return (
      <header className='header-container'>
        {title}
      </header>
    )
  }
}