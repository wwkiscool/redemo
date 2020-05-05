import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

import Ta from './../common/ta/ta'
import Wo from './../common/wo/wo'

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
  renderContent(tabType) {
    if (tabType === 'Ta') {
      return (
        <div style={{ position: 'relative' }}>
          <Ta></Ta>
        </div>
      )
    } else if (tabType === 'Ni') {
      return (
        <div>
          123
        </div>
      )
    } else if (tabType === 'Wo') {
      return (
        <div>
          <Wo></Wo>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
  render() {
    return (
      <div style={{ height: '100vh' }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${ta}) center center /  21px 21px no-repeat`
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${taed}) center center /  21px 21px no-repeat`
              }}
              />}
              title="Ta"
              key="ta"
              selected={this.state.selectedTab === 'taTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'taTab',
                });
              }}
            >
              {this.renderContent('Ta')}
              {/* {
                this.props.history.push('/home/ta')
              } */}
            </TabBar.Item>
            <TabBar.Item
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${you}) center center /  21px 21px no-repeat`
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${youed}) center center /  21px 21px no-repeat`
              }}
              />}
              title="你"
              key="ni"
              selected={this.state.selectedTab === 'niTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'niTab',
                });
              }}
            >
              {this.renderContent('Ni')}
            </TabBar.Item>
            <TabBar.Item
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${wo}) center center /  21px 21px no-repeat`
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${woed}) center center /  21px 21px no-repeat`
              }}
              />}
              title="我"
              key="wo"
              selected={this.state.selectedTab === 'woTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'woTab',
                });
              }}
            >
              {this.renderContent('Wo')}
            </TabBar.Item>


          </TabBar>
      </div>
    );
  }
}

export default home