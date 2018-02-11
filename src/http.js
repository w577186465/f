import axios from 'axios'
import router from './router'

var accessToken = window.localStorage.getItem('accessToken')

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (accessToken) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${accessToken}`
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
          window.localStorage.removeItem('token')
          window.localStorage.token = null
          router.replace({
            path: 'login'
          })
      }
    }
    return Promise.reject(error.response) // 返回接口返回的错误信息
  })

export default axios
