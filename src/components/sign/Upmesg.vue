<template>
  <div>
    <msg :title="this.Msg.title" :description="this.Msg.description" :buttons="this.Msg.buttons" :icon="this.Msg.icon"></msg>
  </div>
</template>

<script>
import { Msg, Divider, XButton } from 'vux'
export default {
  name: 'UpPermission',
  components: {
    Msg,
    Divider,
    XButton
  },
  methods: {
    to: function (r) {
      this.$router.push(r)
    },
    changeIcon (t) {
      alert(t)
      if (!this.icon || this.icon === 'success') {
        this.icon = 'warn'
        return
      }
      if (this.icon === 'warn') {
        this.icon = 'info'
        return
      }
      if (this.icon === 'info') {
        this.icon = 'waiting'
        return
      }
      if (this.icon === 'waiting') {
        this.icon = 'success'
      }
    }
  },
  data () {
    return {
      description: 'msg description',
      icon: '',
      buttons: [{
        type: 'primary',
        text: '进入会员中心',
        onClick: this.to.bind(this, {name: 'SignCenter'})
      }, {
        type: 'default',
        text: '继续浏览'
      }]
    }
  }
}
</script>