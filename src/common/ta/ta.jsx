import React, { Component } from 'react';
import { List,InputItem, Flex } from 'antd-mobile';
import {Input} from 'antd'

import wo from './../../assets/dog/you.png'

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

    }
  }
  inputChange = (value) => {
    console.log(value)
  }

  render() {
    return (
      <div>
        <div className='header' style={styles.header}>
          <div style={styles.imgWrapper}>
          <img src={wo} alt="wo in ta" style={styles.headerImg} />
          </div>
          
          
            <Input
              style={{border:'none',flex:.8,borderRadius:20,overflow:'hidden',height:30,background:"#f8f8f8"}}
              placeholder='wwkissocool'
              type='text'
              onChange={this.inputChange}
              allowClear
            >
            </Input>
          <div>
            wwk
          </div>
        </div>
      </div>
    )
  }
}
const styles = {
  header:{
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    background:'white'
  },
  headerImg:{
    width: "100%",
    height: "100%",
    borderRadius:"50%"
  },
  imgWrapper:{
    width: 30,
    height: 30,
    borderRadius:15,
    background:"#f8f8f8",
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}
export default ta