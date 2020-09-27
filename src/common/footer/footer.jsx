import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

import you from '../../assets/hometab/ni.png'
import youed from '../../assets/hometab/niSelected.png'

import wo from '../../assets/hometab/wo.png'
import woed from '../../assets/hometab/woSelected.png'

import ta from '../../assets/hometab/ta.png'
import taed from '../../assets/hometab/taSelected.png'
// import Ta from '../../pages/ta/'

export default class DIYFooter extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='wrapper'>
        <NavLink className='itemLink' to='/ta'>
          <div className='wrapimg'>
            <img className='tabimg' src={ta} alt="ta" />
            <div>ta</div>
          </div>
        </NavLink>
        <NavLink className='itemLink' to='/you'>
          <div className='wrapimg'>
            <img className='tabimg' src={you} alt="you" />
            <div>you</div>
          </div>
        </NavLink>
        <NavLink className='itemLink' to='/home'>
          <div className='wrapimg'>
            <img className='tabimg' src={wo} alt="wo" />
            <div>wo</div>
          </div>
        </NavLink>
        </div>
      </div>
    )
  }
}