<template>
  <div class="warp">
    <router-view name="main"></router-view>
    <tabbar class="tabbar">
      <tabbar-item selected @on-item-click="cate_show = true">
        <x-icon slot="icon" type="person" class="icon-red"></x-icon>
        <span slot="label">文章分类</span>
      </tabbar-item>
      <tabbar-item :link="{name: 'SignCenter'}">
        <x-icon slot="icon" type="person" class="icon-red"></x-icon>
        <span slot="label">我</span>
      </tabbar-item>
      <actionsheet v-model="cate_show" @on-click-menu-cancel="" :menus="category" @on-click-menu="cate_select"></actionsheet>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, Actionsheet } from 'vux'

export default {
  name: 'main',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Actionsheet
  },
  data () {
    return {
      cate_show: false,
      category: {
        1: '风水'
      }
    }
  },
  created: function () {
    this.axios.get('/server/api/article/category')
      .then((res) => {
        this.category = res.data.data
        console.log(res)
      })
  },
  methods: {
    cate_select: function (id) {
      this.$router.push({
        name: 'ArticleCategory',
        params: {id: id}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.warp {
  height: 100%;
  overflow: auto;
  padding-bottom: 63px;
  box-sizing: border-box;
}
.main {
  height: 100%;
  overflow: auto;
}
.tabbar {
  z-index: 99 !important;
}
</style>