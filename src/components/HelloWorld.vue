<template>
  <div class="hello">
      <button @click="add">添加普通会员</button>
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    add () {
      this.axios.post('/server/api/member/add', {
        openid: 'asdf'
      })
    },
    login () {
      window.localStorage.openid = 'asdf'
    }
  }
}
</script>

<style>
    img{
        display: block;
        width: 120px;
        height: 120px;
    }
    h3{
        text-align: center;
    }
    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
</style>
