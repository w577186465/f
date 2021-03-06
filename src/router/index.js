import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/sign/Up'
import SignCenter from '@/components/sign/Center'
import Article from '@/components/article/List'
import ArticleSingle from '@/components/article/Single'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
          path: 'article',
          name: 'Article',
          components: {
            main: Article
          }
        },
        {
          path: 'article/:id(\\d+)',
          name: 'ArticleSingle',
          components: {
            main: ArticleSingle
          }
        },
        {
          path: 'article/category/:id(\\d+)',
          name: 'ArticleCategory',
          components: {
            main: Article
          }
        },
        {
          path: 'sign-up',
          name: 'SingUp',
          meta: {
            requireAuth: true
          },
          components: {
            main: SignUp
          }
        },
        {
          path: 'sign/center',
          name: 'SignCenter',
          meta: {
            requireAuth: true
          },
          components: {
            main: SignCenter
          }
        }
      ]
    }
  ]
})

var openid = window.localStorage.getItem('openid')
Vue.prototype.openid = openid

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (openid) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      alert('nologin')
      window.location.href = '/server/api/login'
    }
  } else {
    next()
  }
})

export default router
