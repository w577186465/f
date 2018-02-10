<template>
  <div class="hello">
      <img src="../assets/upload.png" alt="" id="img">
      <input type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)">
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    change (event) {
      let image = document.getElementById('img') // 预览对象
      this.clip(event, {
        resultObj: image,
        aspectRatio: 1
      })
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
