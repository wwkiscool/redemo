import React, {Component} from 'react';
/***
 * 异步 加载模块
 * @param importComponent
 */

 export default function asyncComponent(importComponent){
  class AsyncComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        component: null
      }
    }
    async componentDidMount(){
      const {default: component} = await importComponent();
      this.setState({component})
    }
    render(){
      const C = this.state.component
      return C?<C {...this.porps}></C> :null
    }
  }
  return AsyncComponent;
 }