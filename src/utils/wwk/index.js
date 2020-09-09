const wwk = {};

// 系统相关常量
wwk.OS = {
  Android: 'Android',
  BlackBerry: 'BlackBerry',
  iOS: 'iOS',
  Windows: 'Windows',
  MacOS: 'MacOS',
  WindowsMobile: 'WindowsMobile',
  Other: 'Other',
  WebApp: 'WebApp',
  WeChat: 'WeChat',
  Browser: 'Browser'
};

// 获取当前系统版本
const OSChecker = {
  ...wwk.OS,
  _Android: function () {
    return !!navigator.userAgent.match(/Android/i);
  },
  _BlackBerry: function () {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  _iOS: function () {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  _Windows: function () {
    return !!navigator.userAgent.match(/Windows NT/i);
  },
  _MacOS: function () {
    return !!navigator.userAgent.match(/Macintosh/i);
  },
  _WindowsMobile: function () {
    return !!navigator.userAgent.match(/IEMobile/i);
  },
  is: function (name) {
    if (name) {
      return this['_' + name]();
    } else {
      return (this._Android() && this.Android) || (this._BlackBerry() && this.BlackBerry) || (this._iOS() && this.iOS) || (this._WindowsMobile() && this.WindowsMobile) || (this._Windows() && this.Windows) || (this._MacOS() && this.MacOS) || this.Other;
    }
  }
}

wwk.os = OSChecker.is();


function judgeBigScreen() {  //，这里根据返回值 true 或false ,返回true的话 则为全面屏
  var result = false;
  var rate = window.screen.height / window.screen.width;
  var limit =  window.screen.height == window.screen.availHeight ? 1.8 : 1.65; // 临界判断值

  // window.screen.height为屏幕高度
  //  window.screen.availHeight 为浏览器 可用高度
  if (rate > limit) {
      result = true;
  }
  return result;
}

wwk.type = judgeBigScreen()
/**
 * 获取html页面连接中的传参
 * @returns {{}} 返回对象
 */
wwk.getParams = function (url) {
  let data = {};
  let str = url || window.location.href;
  let index = str.indexOf('?');
  // 如果?为最后一个字符 则表示没有参数
  if (index + 1 === str.length) return data;
  // 截取? 后面部分
  if (index !== -1) str = str.slice(index + 1);
  // 去掉# 后面部分
  index = str.indexOf('#');
  if (index !== -1) str = str.slice(0, index);

  let dataArr = str.split('&');
  for (let i = 0; i < dataArr.length; i++) {
    let _dataArr = dataArr[i].split('=');
    data[_dataArr[0]] = _dataArr[1];
  }
  return data;
};

export default wwk