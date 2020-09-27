import React, { Component } from 'react';
import './swiper.scss'

export default class swiperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  swiper_item = React.createRef();
  componentDidMount() {

    let swiperContent = document.querySelector('.swiper_content');


    let delay = setInterval(() => {
      if (swiperContent.style.left.replace('-', '').replace('vw', '') < 180) {
        swiperContent.style.left = parseInt(swiperContent.style.left.replace('vw', '') - 90) + 'vw';
      } else {
        swiperContent.style.left = '0vw';
      }

      console.log(swiperContent.style.left);
    }, 2000)
  }

  animate = (element, target) => {

  }

  render() {
    return (
      <div className={'swiper_wrapper'}>
        <div className={'swiper_content'} >
          {
            this.props.swiperData.map((item) => (
              <img className={'swiper_img'} ref={this.swiper_item} key={item.id} src={item.url} />
            ))
          }
        </div>
      </div>
    );
  }
}