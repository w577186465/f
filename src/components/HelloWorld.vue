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
      window.localStorage.wxtoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU0ZmE4MzI5NTcyNGJlZTFhYTFlYjc0ODAyMTJiMDU2Zjg0OWZhOTViY2YzNzJlYmMzMzM3NDI5ODczOTYzZGUzZWEyY2FjNTI1MmYzY2U5In0.eyJhdWQiOiIxIiwianRpIjoiZTRmYTgzMjk1NzI0YmVlMWFhMWViNzQ4MDIxMmIwNTZmODQ5ZmE5NWJjZjM3MmViYzMzMzc0Mjk4NzM5NjNkZTNlYTJjYWM1MjUyZjNjZTkiLCJpYXQiOjE1MTg0NDc1MjQsIm5iZiI6MTUxODQ0NzUyNCwiZXhwIjoxNTQ5OTgzNTI0LCJzdWIiOiIxIiwic2NvcGVzIjpbIndlaXhpbiJdfQ.foErdwn2YPwps-X9FD764pWVHBVW2rN-qyXL-4-lxkNn45XM1seQ_JZ-f9mUlQz3TeJR31yQyGLjoBE49IzxjyqVXZxmZOinNoOZITObCx80FRh2-CQnEppDcGrY1bLqXN-OBPhZBI9QBO7Jy-oXwfpt2v9RzlZSHINQVRdIatafVLyzJWnxIJtkb62RcGb9fBeUPKUIJwG7BF_h00NzQvz5LwDK4fQQyZ1u5otcMAKY5ac8O53k-qULrebgJi0OP0ldN3lp-zzwDQTpefSHczMX6zXWOYMAXQwTy6FXQ4xeJ2s_jfeiVbTDHkmxAy-ypOr31ed9VFM4p0ocBXFM9Fb9jpoD7svaEOoTzYXhf_D7qSiF764GHBGIR8Bfgi2ZnepZ781b8OnPLOJTHOYNWb2HuTbxh-UbWvYv8p5tjkG4zqnIBIII7GRTL64i0TgTtqGP595Y2sdA2YGbzLMPzB9zX9JCjZooBJ2lQsppn4kPU0s94JvDt-ojI1P_JSlKHCqHgsFlhuThtqSTB8ufSK5Al-TMxANYI4Vf7zlGQ00qwzf6W3HouXhDwWY4x370W05rNnkVGGWr4wGwIC4QaAbXLogP5MWTOPIKgna4DHUpibJGIXlSePFEAlcMV3GzTJKcsR6k5G-RNs_SdNtmQFNXvgD6gAFPUKKXFjkUOTA'
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
