import React, { Component } from 'react';
import { Input } from 'antd'
// import { SearchBar } from 'antd-mobile'

import wo from './../../assets/dog/you.png'
import styleS from './ta.module.css'

import TaItem from './taItem.jsx'
import ChannelContent from './channelContent.jsx'


const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
class ta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelData: [{
        channelName: 'wwk',
        channelCode: '1'
      }, {
        channelName: '推荐2',
        channelCode: '2'
      }, {
        channelName: '推荐3',
        channelCode: '3'
      }, {
        channelName: '推荐4',
        channelCode: '4'
      }, {
        channelName: '推荐5',
        channelCode: '5'
      }, {
        channelName: '推荐6',
        channelCode: '6'
      }, {
        channelName: '推荐7',
        channelCode: '7'
      }, {
        channelName: '推荐8',
        channelCode: '8'
      }, {
        channelName: '推荐9',
        channelCode: '9'
      }, {
        channelName: '推荐10',
        channelCode: '10'
      }],
      checkTabChannel: 'wwk'
    }
  }
  inputChange = (value) => {
    console.log(value)
  }
  tabChannel = (item) => {
    console.log(item)
    this.setState({
      checkTabChannel: item.channelName
    })
  }
  tabContent = (item) => {
    // 每个选项卡的内容
    return (
      // <TaItem ref="carousel" checkTabChannel={item}></TaItem>
      null
    )
  }
  channelContent = () => {
    return (
      <ChannelContent></ChannelContent>
    )
  }
  render() {
    return (
      <div>
        <div className={styleS.wrap}>
        <div className={styleS.header} style={styles.header}>
          <div className={styleS.imgWrapper}>
            <img src={wo} alt="wo in ta" style={styles.headerImg} />
          </div>
          <Input
            placeholder='wwkissocool'
            className={styleS.inputStyl}
            type='text'
            onChange={this.inputChange}
          >
          </Input>
          {/* <SearchBar placeholder="Search" style={{ border: 'none', flex: .8, textIndent: "1em", borderRadius: 20, overflow: 'hidden', height: 30, background: "#f8f8f8" }}  /> */}
          <div>
            wwk
          </div>
        </div>
        <div className={styleS.channel} >
          <div className={styleS.channelWrap}>
            {
              this.state.channelData.map((item) => {
                return (
                  <div key={item.channelCode} onClick={() => this.tabChannel(item)}
                    className={this.state.checkTabChannel === item.channelName ? styleS.checkedTab : ''}
                    style={{ fontSize: 16, margin: "0 10px", height: '100%', boxSizing: 'border-box' }}>
                    {item.channelName}
                  </div>
                )
              })
            }

          </div>
        </div>
        </div>
        {this.tabContent(this.state.checkTabChannel)}
        {this.channelContent()}
      </div>
    )
  }
}
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'white',
    width: '100%',
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0
  },
  headerImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%"
  },

}
export default ta