import React, { Component } from 'react';

import Header from '../../../common/header.jsx'

import leftUrl from '../../../assets/me/left.png';
import rightUrl from '../../../assets/me/right.png';
class calendar extends Component {
  constructor() {
    super();
    this.state = {
      datatop:'2019-10 '
    }
  }
  goBack = () => {

  }
  render() {
    return (
      <div>
        <Header title='日历' goBack={this.goBack.bind(this)}></Header>
          <div style={calendarStyle.m_calendar}>
            <div style={calendarStyle.datemain}>
              <div style={calendarStyle.dateTop}>
                <div style={calendarStyle.dateimgA}>
                  <img src={leftUrl} alt="left" style={calendarStyle.imgA} />
                </div>
                <p style={calendarStyle.thep}>{this.state.datatop}</p>
                <div style={calendarStyle.dateimgB}>
                  <img src={rightUrl} alt="right"  style={calendarStyle.imgB} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const calendarStyle = {
  m_calendar: {
    background: '#f8f8f8',
    marginTop: '10px'
  },
  datemain: {},
  dateTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'90px',
    background: '#fff',
  },
  dateimgA: {
    width: '29.5px',
    height: '25px',
    lineHeight: '25px',
    marginRight: '50px',
  },
  dateimgB: {
    width: '29.5px',
    height: '25px',
    lineHeight: '25px',
    marginRight: '50px',
  },
  imgA: {
    width: '100%',
    height: '100%'
  },
  imgB: {
    width: '100%',
    height:'100%'
  },
  thep: {
    fontSize: '32px',
    color: '#333333',
    fontWeight: '600',
    letterSpacing: '1.51px',
  }
}

export default calendar;