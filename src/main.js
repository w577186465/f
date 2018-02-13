// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import axios from './http'
import App from './App'
import Global from './global'
import {
  Group,
  XInput,
  AlertPlugin
} from 'vux'

Vue.use(Group)
Vue.use(XInput)
Vue.use(AlertPlugin)

Vue.prototype.axios = axios

// 全局变量
Vue.prototype.Msg = Global.Msg

Vue.prototype.errHandle = (err, msg = '') => {
  console.log(err)
  var message = ''
  if (err.status === 400) {
    message = err.data.message
  } else {
    message = '发生未知错误'
  }

  if (msg !== '') {
    message += '，' + msg
  }

  Vue.$vux.alert.show({
    title: '操作失败',
    content: message
  })
}

Vue.prototype.dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {type: mime})
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
