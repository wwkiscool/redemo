import React from 'react';
import RouterIndex from './router/index' // 引入路由文件

import './App.css'
import wwk from './utils/wwk'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      device: ''
    }
  }
  componentDidMount () {
    // 渲染前
    // 不能在里面执行this.setState，会有改变组件状态的副作用
    console.log('1', window)
    // 如果时ios 并且版本大于11增加一个class
    if (wwk.isIOSApp()) {
      if(parseInt(wwk.client.version) >= 13) {
        this.setState({
          device: 'ios-support-safe'
        })
      } else {
        this.setState({
          device: 'ios-unsupport-safe'
        })
      }
    } else {
      this.setState({
        device: 'general-device'
      })
    }
  }
  render() {
    return (
      <div className={this.state.device}>
        <div>
          <RouterIndex className='main-viewport'></RouterIndex>
        </div>
      </div>
    )
  }
}

export default App