import axios from 'axios'
// // import qs from 'qs'



const request = axios.create({})


// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做什么
  return config;
},(err)=> {
  return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request

