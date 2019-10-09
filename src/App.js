import React from 'react';
import RouterIndex from './router/index' // 引入路由文件

import wwk from './utils/wwk'
class App extends React.Component {
  render() {
    console.log('1', wwk.client)
    return (
      <div>
        <RouterIndex></RouterIndex>
      </div>
    )
  }
}

export default App