<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { TabModule } from '@/store/modules/tab';
import VueRouter, { Route, RouteRecord, RouteConfig } from 'vue-router';

@Component({
  components: {}
})
export default class extends Vue {
  @Watch('$route')
  changeRoute(newVal: RouteConfig) {
    if (newVal.name == '404') return;
    if (newVal.meta.authentication) {
      TabModule.addTabList(newVal.meta);
    }
  }
}
</script>


