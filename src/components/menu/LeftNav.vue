
<template>
  <div class="my-nav">
    <div class="expand" @click="isCollapse = !isCollapse">
      <img src="./../../assets/images/expand.png" :class=" isCollapse ? 'rotate-img' : '' " alt />
    </div>
    <el-menu class="el-menu-vertical-demo" :router="true" :default-openeds="defaultOpeneds" :default-active="$route.path" :collapse="isCollapse">
      <template v-for="item in menuList">
        <el-menu-item v-if="!item.children" :key="item.id" :index="item.path">
          <i class="iconfont icon-chanpin" :class="item.menu_icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.id" :key="item.id">
          <template slot="title">
            <i class="iconfont icon-chanpin" :class="item.menu_icon"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <template v-for="every in item.children">
            <el-submenu v-if="every.children" :index="every.id" :key="every.id">
              <template v-for="only in every.children">
                <template slot="title">
                  <span slot="title">{{only.name}}</span>
                </template>
                <el-menu-item :index="only.path" :key="only.id">{{only.name}}</el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :index="every.path" :key="every.id">{{every.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import menuList from '@/config/menuList';

import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class extends Vue {
  private isCollapse: boolean = false;
  private selectText: string = '';
  private defaultOpeneds: any[] = [];

  get menuList() {
    return menuList;
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.my-nav {
  height: 100%;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  .expand {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #f1f1f1;

    img {
      width: 18px;
      cursor: pointer;
      @include transitons(0.4s);
      transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      &.rotate-img {
        transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
        -webkit-transform: rotateY(360deg);
        -o-transform: rotateY(360deg);
      }
    }
  }
}
/deep/ .el-menu {
  border-right: none;
}

// .my-nav {
//   overflow-y: auto;
//   overflow-x: hidden;
//   border-right: 1px solid #e7eaef;
// @include transitons(0.35s);
// &.expand-active {
//   width: 64px;
// }
//   .expand {
//     width: 100%;
//     height: 45px;
//     line-height: 45px;
//     text-align: center;
//     img {
//       width: 18px;
//       @include transitons(0.4s);
//       transform: rotateY(180deg);
//       -moz-transform: rotateY(180deg);
//       -webkit-transform: rotateY(180deg);
//       -o-transform: rotateY(180deg);
//       &.rotate-img {
//         transform: rotateY(360deg);
//         -moz-transform: rotateY(360deg);
//         -webkit-transform: rotateY(360deg);
//         -o-transform: rotateY(360deg);
//       }
//     }
//   }
//   /deep/ .el-menu-vertical-demo:not(.el-menu--collapse) {
//     width: 200px;
//     min-height: 400px;
//   }
//   /deep/ .el-submenu__title {
//     background: transparent !important;
//   }

//   /deep/ .el-menu-item {
//     height: 40px !important;
//     line-height: 40px !important;
//     font-size: 14px;
//     background: transparent !important;
//     &.is-active {
//       background: #f1f1f1 !important;
//       .bar-line {
//         position: absolute;
//         right: 0;
//         top: 0;
//         display: inline-block;
//         height: 100%;
//         width: 3px;
//       }
//     }
//   }

//   /deep/ .el-menu--vertical {
//     .el-menu {
//       .el-menu-item {
//         line-height: 56px;
//       }
//     }
//   }
//   /deep/ .el-menu--popup .el-menu-item {
//     color: inherit !important;
//     background-color: initial !important;
//   }
// }
// .iconfont {
//   font-size: 17px;
//   margin-right: 8px;
//   position: relative;
//   top: 1px;
// }
</style>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* .my-nav::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}
.my-nav::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(153, 153, 153);
  background: #f1f1f1;
}
.my-nav::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(153, 153, 153);
  border-radius: 0;
  background: #fff;
} */
</style>