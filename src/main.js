// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import Global from './global'
import clipper from '../static/clipper'
import {
  Group,
  XInput
} from 'vux'

Vue.use(Group)
Vue.use(XInput)

// 图片裁剪
Vue.use(clipper)

// 全局变量
Vue.prototype.Msg = Global.Msg

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
