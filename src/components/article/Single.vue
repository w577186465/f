<template>
  <div>
    <group>
      <card on-click-header="">
        <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
        <div slot="content" class="content">
          <h1>在线图片裁剪,关于使用cropperjs踩过的坑</h1>
          <div class="info">发布于：2018-02-06</div>
          <div class="text">
            <p>在线图片裁剪,关于使用cropperjs踩过的坑 - CSDN博客
2017年6月1日 - 最近在做一个项目,其中包括了一个图片在线裁剪功能,于是找到了cropperjs,cropper...看了看http请求,发现图片大小17M多,比裁剪前的原图还大,图片格式是...
blog.csdn.net/u0125520...  - 百度快照
javascript - cropper.js裁剪图片同一张图片的话尺寸就变小了 - ...
2017年9月1日 - cropper.js裁剪图片同一张图片的话尺寸就变小了 javascript ssszwzr 2017年09月01日提问 关注 2 关注 收藏 0 收藏,695 浏览 问题对人有帮助,内容完整,...
https://segmentfault.com/q/101...  - 百度快照
cropper.js 实现HTML5 裁剪图片并上传(裁剪上传头像。) - CSDN博客

2016年7月4日 - cropper.js 通过canvas实现图片裁剪,最后在通过canvas获取裁剪区域的图片base64串。...restore : 类型:Boolean,默认值true 是否调整窗口大小后恢复裁剪区域。 大小相关...
blog.csdn.net/qq727013...  - 百度快照
cropper.js 实现裁剪图片并上传(PC端) - 简书
2017年8月19日 - 大小相关 minContainerWidth:类型:Number,默认值200。容器的最小宽度。 minContainer...cropper.js部分参数代码: (function (global, factory) { type...
https://www.jianshu.com/p/b252...  - 百度快照
js图片剪裁工具cropper使用问题 - SegmentFault
js图片剪裁工具cropper使用问题 这是cropper的演示页面:https://fengyuanchen.github.i... 我想使用旋转按钮,就是下面红框中的两个: 按照文档操作https://github...
https://segmentfault.com/q/101...  - 百度快照
使用cropper.js裁剪头像的实例代码_javascript技巧_脚本之家

2017年9月29日 - 最近小编在做一个裁剪头像的功能,下面小编把使用cropper.js裁剪头像的实例代码...(); //这里是控制裁剪区域的大小(这里也决定你所要生成的图片的大小和形状 ...
www.jb51.net/article/1...  - 百度快照
ImageCropper:基于JavaScript的Web前端图片剪裁工具,特别适用于...

JS分类导航 A Accordion AutoComplete Animation C Calendar Charts Corners Cropper...ByCropper是一个采用Mootools1.2开发的图片裁剪工具。它能够裁剪后的图片尺寸信息...
www.open-open.com/ajax...  - 百度快照
cropper.js图片裁剪 - 明媚下雨天 - 博客园

2017年9月20日 - cropper.js图片裁剪 最近做电子名片的项目,可是个人照片展示上出现了 用户上传的图片尺寸严重失调,所以要求进行图片裁剪,再此我对图片裁剪进行调研 还不太成熟 以后...
https://www.cnblogs.com/GoTing...  - 百度快照
jQuery Cropper 使用说明 - CSDN博客
2015年8月3日 - "js/imagecropper/bootstrap.min.css" /> ...大小为3k多,0.5质量大小为4k多, //这回应该不会出现卡的情况了, //既然差别1k多,还是用0.5的质量,还是...
blog.csdn.net/monitery...  - 百度快照
jQuery图像裁剪插件Image Cropper(推荐)-HTML我帮您源码站

jQuery图像裁剪插件Image Cropper可以切换是否裁剪,在线进行拖动改变,改变区域并显示裁剪大小,在线预览裁剪区域。 <!-- jQuery is required --> ...</p>
          </div>
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


</style>
