<template>
  <div>
    <group>
      <card on-click-header="">
        <img slot="header" :src="data.thumb" style="width:100%;display:block;">
        <div slot="content" class="content">
          <h1>{{data.title}}</h1>
          <div class="info">发布于：{{data.updated_at}}</div>
          <div class="text" v-html="data.content"></div>
        </div>
      </card>
    </group>
  </div>
</template>

<script>
import { Card } from 'vux'

export default {
  name: 'artcile-list',
  components: {
    Card
  },
  data () {
    return {
      id: this.$route.params.id,
      data: {}
    }
  },
  created: function () {
    this.get()
  },
  methods: {
    get: function () {
      this.axios.get('/server/api/article/' + this.id)
        .then((res) => {
          if (res.data.status === 401) {
            this.$vux.alert.show({
              title: '权限不足',
              content: '该文章只有高级会员可浏览，请先申请高级会员。'
            })
            this.$router.push({name: 'SingUp'})
          }
          this.data = res.data.data
        })
        .catch((err) => {
          this.errHandle(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  h1 {
    font-size: 22px;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 10px;
    margin-bottom: 5px;
  }

  .info {
    color: #888;
    font-size: 14px;
    line-height: 30px;
  }

  padding: 15px;
  color: #333;

  p {
    line-height: 1.8em;
  }
}

/deep/ {
  .ql-align-center {
    text-align: center;
  }
}

</style>
