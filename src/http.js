import axios from 'axios'
// import router from './router'

var openid = window.localStorage.getItem('openid')

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (openid) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${openid}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          window.localStorage.removeItem('openid')
          window.localStorage.openid = null
          window.location.href = '/server/api/login'
      }
    }
    return Promise.reject(error.response) // 返回接口返回的错误信息
  })

export default axios
