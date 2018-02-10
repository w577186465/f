<template>
  <div>
    <router-view name="main"></router-view>
<!--     <tabbar class="tabbar">
      <tabbar-item icon-class="add">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <x-icon slot="icon" type="person" class="icon-red"></x-icon>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar> -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  name: 'main',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<style lang="scss">
.tabbar {
  position: fixed;
}
</style>