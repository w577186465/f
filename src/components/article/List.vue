<template>
  <div>
    <group>
      <card on-click-header="">
        <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
        <div slot="content" class="card-padding">
          <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
          <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
        </div>
      </card>

      <card>
        <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
        <div slot="content" class="card-padding">
          <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
          <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
        </div>
      </card>

      <card>
        <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
        <div slot="content" class="card-padding">
          <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
          <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
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
      info: {}
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.card-padding {
  padding: 15px;
}
</style>
