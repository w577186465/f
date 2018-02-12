<template>
  <div>
    <card v-for="v in data.article.data" @on-click-header="to({ id: v.id })">
      <img slot="header" :src="v.thumb" style="width:100%;display:block;">
      <div slot="footer" class="card-padding" @click="to({ id: v.id })">
        <p style="color:#999;font-size:12px;">发布时间：{{v.updated_at}}</p>
        <p style="font-size:14px;line-height:1.2;">{{v.description}}</p>
      </div>
    </card>
  </div>
</template>

<script>
import { Card, Group } from 'vux'

export default {
  name: 'artcile-list',
  components: {
    Card,
    Group
  },
  data () {
    return {
      data: {
        article: {}
      },
      info: {}
    }
  },
  created: function () {
    this.get()
  },
  watch: {
    '$route': function () {
      this.get()
    }
  },
  methods: {
    get: function () {
      var catid = this.$route.params.id
      this.axios.get('/server/api/article', { params: { 'catid': catid } })
        .then((res) => {
          console.log(res.data.data)
          this.data = res.data.data
        })
    },
    to: function (to) {
      this.$router.push({ name: 'ArticleSingle', to })
    }
  }
}
</script>

<style scoped>
.card-padding {
  padding: 15px;
}
</style>
