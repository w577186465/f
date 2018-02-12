<template>
  <div>
    <div class="avatar">
      <div class="avatar-box" @click.stop.prevent="uploadClick">
        <img :src="info.avatar" alt="" id="img">
      </div>
      <input type="file" ref="upload" style="display: none;" accept="image/png,image/jpg,image/jpeg" @change="avatar_add">
    </div>
    <group>
      <x-input title="姓名" v-model="info.name"></x-input>
    </group>
    <group>
      <selector title="性别" v-model="info.sex" :options="[{key: '1', value: '男'}, {key: '0', value: '女'}]"></selector>
    </group>
    <group>
      <x-input title="手机" keyboard="number" is-type="china-mobile" v-model="info.tel" mask></x-input>
    </group>
    <group>
      <x-address title="地址" :list="addressData" :raw-value="false" placeholder="辽宁省" v-model="info.region"></x-address>
      <x-input title="具体地址" v-model="info.adress"></x-input>
    </group>
    <group>
      <x-input title="身份证号" v-model="info.certnumber"></x-input>
    </group>

    <div class="submit-btn">
      <x-button type="primary" @click.native="submit">修改信息</x-button>
    </div>

    <div v-if="CropperDialog" class="cropper-box">
      <vueCropper
        style="height: 100%"
        ref="cropper"
        :img="CropopOption.img"
        :autoCrop="CropopOption.autoCrop"
        :autoCropWidth="CropopOption.autoCropWidth"
        :autoCropHeight="CropopOption.autoCropHeight"
        :fixedBox="CropopOption.fixedBox"
      ></vueCropper>
      <div class="handle">
        <x-button type="warn" @click.native="avatar_upload">取消</x-button>
        <x-button type="primary" @click.native="avatar_upload">确认</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, XAddress, ChinaAddressV4Data, Selector } from 'vux'
import VueCropper from 'vue-cropper'

export default {
  name: 'Sign-up',
  components: {
    XInput,
    Group,
    XButton,
    XAddress,
    Selector,
    VueCropper
  },
  data () {
    return {
      images: [
        {
          url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3421141554,1910839773&fm=58'
        }
      ],
      info: {},

      // 裁剪图片
      CropperDialog: false,
      CropopOption: {
        img: '',
        autoCrop: true,
        autoCropWidth: 300,
        autoCropHeight: 300,
        fixedBox: true
      },

      addressData: ChinaAddressV4Data
    }
  },
  created: function () {
    this.get()
  },
  watch: {
    'info.region': function (val) {
      console.log(val)
    }
  },
  methods: {
    get: function () {
      var openid = window.localStorage.getItem('openid')
      this.axios.get('/server/api/member/' + openid)
        .then((res) => {
          if (res.data.data.name === '') {
            this.$router.push({ name: 'SingUp' })
          }
          const info = res.data.data
          const region = parseInt(info.region)
          const province = parseInt(region / 10000) * 10000 // 省
          const city = parseInt(region / 100) * 100 // 市
          info.region = [province, city, region]
          this.info = info
        })
        .catch((err) => {
          this.errHandle(err)
        })
    },

    // 头像
    uploadClick: function () {
      this.$refs.upload.click()
    },
    avatar_add: function (e) {
      var file = e.target.files[0]
      var url = window.URL.createObjectURL(file) // 得到bolb对象路径，可当成普通的文件路径一样使用，赋值给src;
      this.CropopOption.img = url
      this.CropperDialog = true
    },
    avatar_upload: function () { // 上传缩略图
      this.$refs.cropper.getCropData((data) => {
        var blob = this.dataURLtoBlob(data)

        let postData = new FormData()
        postData.append('file', blob)

        this.axios.post('/server/api/uploader', postData)
          .then((res) => {
            this.CropperDialog = false
            this.info.avatar = res.data.data
          })
          .catch((err) => {
            this.errHandle(err)
          })
      })
    },

    to: function (r) {
      this.$router.push(r)
    },
    submit: function () {
      this.axios.post('/server/api/member/signup', this.info)
        .then((res) => {
          this.$vux.alert.show({
            title: '操作成功',
            content: '信息修改成功'
          })
        })
        .catch((err) => {
          this.errHandle(err)
        })
    },
    previewMethod: function () {
    },
    addImageMethod: function () {
    },
    removeImageMethod: function () {
    }
  }
}
</script>

<style lang="scss" scoped>
.cropper-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  .handle {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;

    button {
      margin: 0;
      width: 120px;
    }
  }
}
.avatar {
  background: #393a3e;
  padding: 10% 0;
  .avatar-box {
    background: #f6f6f6;
    width: 50%;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #f6f6f6;

    img {
      display: block;
      width: 100%;
    }
  }
}

.cropper-crop-box {
  width: 320px;
  height: 320px;
}

.submit-btn {
  padding: 20px 15px;
}
</style>
