import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import QueueAnim from 'rc-queue-anim'; // 动画
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './home.scss';
import Me from '../pages/me/me'

import DIYFooter from '../common/footer/footer'


class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,
      hidden: false,
      selectedTab: 'woTab'
    }
  }
  render() {
    return (
      <div className='home'>
        <QueueAnim>
          <Me></Me>
          <DIYFooter></DIYFooter>
        </QueueAnim>
      </div>
    );
  }
}

export default home