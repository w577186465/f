import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SignUp from '@/components/sign/Up'
import SignCenter from '@/components/sign/Center'
import Msg from '@/components/Msg'
import Article from '@/components/article/List'
import ArticleSingle from '@/components/article/Single'
import NoPermission from '@/components/article/NoPermission'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
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
          path: 'article/:id',
          name: 'ArticleSingle',
          components: {
            main: ArticleSingle
          }
        },
        {
          path: 'sign-up',
          name: 'SingUp',
          components: {
            main: SignUp
          }
        },
        {
          path: 'sign/center',
          name: 'SignCenter',
          components: {
            main: SignCenter
          }
        },
        {
          path: 'msg',
          name: 'Msg',
          components: {
            main: Msg
          }
        }
      ]
    },
    {
      path: '/article/nopermission',
      name: 'NoPermission',
      component: NoPermission
    }
  ]
})
