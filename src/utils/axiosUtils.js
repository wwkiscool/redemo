import axios from 'axios'
// import qs from 'qs'
import { showFullScreenLoading, hideFullScreenLoading} from './common.js'


const request = axios.create({})


// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做什么
  showFullScreenLoading()
  return config;
},(err)=> {
  return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  setTimeout (() => {
    hideFullScreenLoading();
  }, 1000)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request

