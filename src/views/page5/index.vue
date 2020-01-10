<template>
  <div>
    page5
    <input type="text" />
    <br />
    <div style="margin-top:20px">
      请在输入框内输入内容，然后切换至其他页面，再返回当前页面。查看当前页面内容，体验cached。
      当在标签页关闭页面的时候，被关闭的页面的cached会被清除掉，重新在左侧导航栏打开可以验证！！！
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'page5',
  components: {}
})
export default class extends Vue {}
</script>