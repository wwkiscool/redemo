import React, { Component } from 'react';

import './tab.scss'

// 选项卡 组件

export default class tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      leftDistance: 0,
      preWidth: 0
    }
  }
  componentDidMount() {
    let preWidth = parseInt((document.querySelector('.active').clientWidth - 30) / 2).toFixed();
    document.querySelector('.bottom_tab').style.marginLeft = preWidth + "px"
    document.querySelector('.bottom_tab').style.marginRight = preWidth + "px"
    this.setState({
      preWidth: document.querySelector('.active').clientWidth
    })
  }
  handleClickTab = (value, index) => {
    // console.log(this.state.index, index, this.state.leftDistance);

    if (this.state.index != index) {
      let resultIndex = index - this.state.index;
      document.querySelector('.bottom_tab').style.width = '80px'
      document.querySelector('.bottom_tab').style.left = this.state.preWidth * index + 'px'
      document.querySelector('.bottom_tab').style.width = '30px'

      // console.log(document.querySelector('.bottom_tab').style.left)
      this.setState({
        index,
        leftDistance: parseInt(document.querySelector('.bottom_tab').style.left.replace('px', ""))
      })
    }


  }
  render() {

    return (
      <div>
        <div className="tab_wrapper">
          <div className="tab_scroll">
            {
              this.props.tabData.map((item, index) => (
                <div key={item.id} style={{ padding: '10px 20px' }} className={`every_tab ${index == this.state.index ? 'active' : ''}`.replace(/\s$/, "")} onClick={() => { this.handleClickTab(item, index) }}>
                  {item.name}
                </div>
              ))
            }

            <div className="bottom_tab" style={{ width: 30 }}></div>
          </div>
        </div >
      </div>
    );

  }
}

