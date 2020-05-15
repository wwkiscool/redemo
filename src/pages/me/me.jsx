import React, { Component } from 'react';
import './me.scss'

import plupload from 'plupload'

import left from '../../assets/me/left.png'
import right from '../../assets/me/right.png'
import defaultAvatar from '../../assets/ta/avatar.jpg'
import axios from '../../utils/axiosUtils'

export default class me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: 'wwww',
      info: '123'
    }
  }
  componentDidMount() {
    // 暂时不登录 
    let uploader = this.initSinglePlupload();
    // uploader.bind('FileAdded', function (uploader, file) {
    //   console.log('123', file)
    //   axios.post('api/user/avatar', {
    //     usercode: '123',
    //     imgData: '',
    //   }).then((res) => {
    //     console.log('123', res);
    //     uploader.start()
    //   })

    // })
    uploader.init()
  }

  // 上传方法
  initSinglePlupload = () => {
    let uploader = new plupload.Uploader({ // 用人家的东西
      runtimes: 'html5, flash',// 优先级
      browse_button: 'user-photo', // 上传id
      usl: ' http://localhost:3001', //上传地址
      filters: {
        max_file_size: '10mb', // 最大文件大小
        mime_types: [{
          title: 'JPG/PNG文件',
          extensions: 'jpg,jpeg,JPG,JPEG,png,PNG,gif,GIF'
        }]
      },
      multi_selection: false, // 单文件上传
      multipart_params: {
        token: ''
      },
      multipart: true, // 为true时将以multipart/form-data的形式来上传文件
      resize: {
        width: 1600,
        height: 1600
      },
      init: {
        // 人家的优秀思路
        // 注: FilesAdded方法我放到componentDidMount中做了,然后在componentDidMount中做了init的调用,这么做是因为是想要在页面刷新完之后,点击上传图标就可以很及时的拿到上传所需要的token值
        FilesAdded: function (uploader, files) { //文件上传前
          console.log('123', files)
          axios.post('api/users/avatar', {
            usercode: '123',
            imgData: files[0].name
          }).then((res) => {
            console.log('123', res);
            uploader.start()
          })
          uploader.start();
        },
        FileUploaded: function (ip, file, result) {
          //文件上传成功的时候触发
          // 图片上传成功之后, 本地不会异步执行state值, 把头像替换,所以这里需要reload一遍页面
          // 然后后端会重新返回头像链接,这时候img中再去取头像即可

          window.location.reload()
          // this.toast.cancel()
        },
        Error: function (up, err) { //上传出错的时候触发
          // this.toast.cancel() // 隐藏 图片上传loading..
        }
      }

    });
    return uploader
  }
  render() {
    return (
      <div className='me-header'>
        <div className='img-background'>
          <div className='top-icon'>
            <img src={left} alt="left" />
            <img src={right} alt="right" />
          </div>
          <div className='avatar'>
            <div className='left'>
              <div className='headerimg' id='user-photo'>
                {/* <ImagePicker></ImagePicker> */}
                <img src={this.state.avatar ? this.state.avatar : defaultAvatar} alt="avatar" />
              </div>

              <div className='perInfo'>
                <div className='firstinfo'>
                  {this.state.name}
                </div>
                <div className='secondinfo'>
                  {this.state.info}
                </div>
              </div>
            </div>
            <div className='right'>
              个人主页
            </div>
          </div>
        </div>
      </div>
    )
  }
}