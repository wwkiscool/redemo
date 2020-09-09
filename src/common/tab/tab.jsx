import React, { Component } from 'react';

import './tab.scss'
// 选项卡 组件
export default class tab extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleClickTab = (value)=>{
    console.log(value)
  }
  render() {
    return (
      <div className="tab_wrapper">
        {
          this.props.tabData.map(item => (
            <div key={item.id} className='every_tab' onClick={()=>{this.handleClickTab(item)}}>
              {item.name}
            </div>
          ))
        }
      </div >
    );

  }
}

