<template>
  <div>
    首页
    <div style="margin-top:20px">请多打开几个其他页面体验 <strong>动态keep-alive</strong> </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'home',
  components: {}
})
export default class extends Vue {}
</script>