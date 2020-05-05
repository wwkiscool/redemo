import React, { Component } from 'react';
import { Carousel,WingBlank } from 'antd-mobile'
import './taItem.css'
export default class taItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['carousel1', 'carousel2', 'carousel3','carousel4'],
    }
  }
  showDetail = () => {
    return (
      <WingBlank>
        <Carousel className='sapce-carousel'
          autoplay
          infinite
          dots={false}
        >
          {this.state.data.map((val, index) => (
              <img
                src={require(`../../assets/ta/${val}.jpg`)}
                alt=""
                key={index}
                style={{ width: '100%', verticalAlign: 'middle' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
          ))}
        </Carousel>
        </WingBlank>
    )
  }
  render() {
    // 根据 父组件传来的参数不同显示不同的页面
    return (
      <div style={{boxSizing:'border-box',padding:"10px 0"}}>
        {this.showDetail()}
      </div>
    );
  }
}

