<template>
  <div>
    <msg title="无权限！" description="该内容需要高级会员才能浏览，您可以申请高级会员。" :buttons="buttons" icon="warn"></msg>
  </div>
</template>

<script>
import { Msg, Divider, XButton } from 'vux'
export default {
  name: 'NoPermission',
  components: {
    Msg,
    Divider,
    XButton
  },
  methods: {
    changeIcon () {
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
        text: '申请高级会员',
        link: 'sign-up'
      }, {
        type: 'default',
        text: '继续浏览'
      }]
    }
  }
}
</script>