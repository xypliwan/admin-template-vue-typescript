<template>
  <div class="master">
    <div class="master-container" v-loading="$root.globalLoading" element-loading-text="loading..." element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.7)">
      <div class="master-header">
        <top-box></top-box>
      </div>
      <div class="master-bottom">
        <div class="master-left">
          <left-nav></left-nav>
        </div>
        <div class="master-right">
          <div class="page-card">
            <page-card></page-card>
          </div>
          <div class="page">
            <transition name="oms" mode="out-in">
              <keep-alive :include="cachedViews">
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopBox from '_c/menu/TopBox.vue';
import LeftNav from '_c/menu/LeftNav.vue';
import PageCard from '_c/menu/PageCard.vue';
import { TabModule } from '@/store/modules/tab';
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {
    TopBox,
    LeftNav,
    PageCard
  }
})
export default class extends Vue {
  get cachedViews() {
    return TabModule.cachedViews;
  }
}
</script>
<style lang="scss">
@import '@/assets/style/global.scss';
html,
body {
  background: #f0f4f3;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.master {
  .master-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .master-header {
      height: 60px;
      background: #39404a;
      overflow: hidden;
    }
    .master-bottom {
      height: calc(100vh - 60px);
      overflow: hidden;
      display: flex;
      min-width: 1000px;
      .master-left {
        float: left;
        height: 100%;
      }
      .master-right {
        flex: 1;
        height: calc(100% - 10px);
        margin: 0 15px;
        background: #fff;
        .page-card {
          height: 55px;
          overflow: hidden;
          background: #fff;
        }
        .page {
          // height: calc(100% - 25px - 60px - 50px);
          height: 100%;
          overflow-y: auto;
          padding: 10px 0px;
          padding-bottom: 54px;
          @include scrollBar;
        }
      }
    }
  }
}
</style>

