import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import QueueAnim from 'rc-queue-anim'; // 动画
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './home.scss';

import DIYFooter from '../common/footer/footer'

import you from '../assets/hometab/ni.png'
import youed from '../assets/hometab/niSelected.png'

import wo from '../assets/hometab/wo.png'
import woed from '../assets/hometab/woSelected.png'

import ta from '../assets/hometab/ta.png'
import taed from '../assets/hometab/taSelected.png'

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
          <DIYFooter></DIYFooter>
        </QueueAnim>
      </div>
    );
  }
}

export default home