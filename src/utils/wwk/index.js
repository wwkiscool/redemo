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

const ClientChecker = {
  ...wwk.OS,
  _WebApp: function () {
    // 安卓APP 和 IOS APP中增加了自定义UA 用于识别当前的版本
    // 其中安卓UA为 SINO_ANDROID_APP/1.0 1.0为版本号
    // IOS UA为 SINO_IOS_APP/1.0
    // 这个地方需要修改一下
    let result = null;
    let match = navigator.userAgent.match(/SINO_([\w]+)_APP\/([\d.]+)/);
    if (match) {
      result = {};
      result.OS = match[1] === 'IOS' ? this.iOS : this.Android;
      result.type = this.WebApp;
      // result.version = match[2]; 
      // 获取到的UA是1.0 由于手机是13.0所以先调试 头部padding
      result.version = '13'
    }

    return result;
  },

  _WeChat: function () {
    let result = null;
    let match = navigator.userAgent.match(/MicroMessenger\/([\w\d.]+)/);
    if (match) {
      result = {};
      result.OS = OSChecker.is();
      result.type = this.WeChat;
      result.version = match[1];
    }
    return result;
  },

  _Browser: function () {
    let result = {};
    result.OS = OSChecker.is();
    result.type = this.Browser;
    result.version = '0';
    return result;
  },

  info: function () {
    return this._WebApp() || this._WeChat() || this._Browser();
  }
}

/**
 * 包含三个属性
 * {
 *   OS: 系统版本
 *   type: 客户端类型包括 Browser WebApp WeChat
 *   version: 从UA字符串中取得的版本 如果type是Browser 则恒为0
 * }
 */
wwk.client = ClientChecker.info();

/**
 * 判断当前环境是否是APP
 */
wwk.isApp = function () {
  return wwk.client.type === OSChecker.WebApp;
};
/**
 * 判断是否为微信环境
 */
wwk.isWeChat = function () {
  return wwk.client.type === OSChecker.WeChat;
};
/**
 * 判断当前是否为android，无论时运行在浏览器还是app 只要是android设备该方法返回true
 * @returns {boolean}
 */
wwk.isAndroid = function () {
  return wwk.client.OS === OSChecker.Android;
}
/**
 * 判断当前是否为Android APP，是android设备并且运行在app中
 */
wwk.isAndroidApp = function () {
  return wwk.isApp() && wwk.isAndroid();
};
/**
 * 判断当前是否为ios，无论运行在浏览器还是app 只要是ios设备该方法均为true
 * @returns {boolean}
 */
wwk.isIOS = function () {
  return wwk.client.OS === OSChecker.iOS;
}
/**
 * 判断当前是否为iOS APP 该方法与isIOS的区别在于 只有当前设备是ios设备并且运行在cordova app中时才为true
 */
wwk.isIOSApp = function () {
  return wwk.isApp() && wwk.isIOS();
};

wwk.isPC = function () {
  return wwk.client.type === OSChecker.Browser && document.documentElement.clientWidth >= 800;
};

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