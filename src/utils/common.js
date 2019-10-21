import { Toast } from 'antd-mobile';

// loading
function showLoading() {
  Toast.loading('加载中',0)
}

// 隐藏
function hideLoading() {
  Toast.hide();
}

// 合并请求，同一时刻只显示一个
let needLoadingRequestCount = 0;

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    showLoading()
  }
  needLoadingRequestCount++
}
export function hideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) {
    return
  }
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    hideLoading()
  }
}