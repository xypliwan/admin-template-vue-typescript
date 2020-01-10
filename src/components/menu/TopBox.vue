<template>
  <div class="top-box">
    <div class="logo-box">
      <img src="./../../assets/images/favicon.png" alt />
      XXX后台管理
    </div>

    <div class="user-info">
      <div class="userinfo">
        <el-dropdown @command="clickItem">
          <span class="el-dropdown-link">
            欢迎您 {{userInfo.username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">
              <i class="iconfont icon-tuichu1"></i>
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getUserInfo, logout } from '@/api/user';
import { UserModule } from '@/store/modules/user';
import { removeLocalStorage } from '@/utils/localStorage';

import { Component, Vue, Watch } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class extends Vue {
  created() {
    // this.getUserInfos();
  }

  mounted() {}

  // @Watch('userInfo.username')
  // changeTest(newVal) {
  //   console.log(newVal, '新的');
  // }

  get userInfo() {
    return UserModule.userInfo;
  }

  private async comfirmLoginout() {
    this.$confirm('确认退出吗?将会清除登录信息', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        logout().then(res => {
          this.$message.success(res.message);
          (this as any).$root.viewShow = false;
          removeLocalStorage('Access-Token');
          (this as any).$root.viewShow = true;
          this.$router.push('/entran');
        });
      })
      .catch(() => {});
  }

  private clickItem(e: string) {
    if (e === '1') {
      this.comfirmLoginout();
    }
  }

  private async getUserInfos() {
    (this as any).$root.globalLoading = true;
    try {
      let { data } = await getUserInfo();
      UserModule.setUserInfo(data);
    } catch (error) {
      this.$message.error(error);
    }
    (this as any).$root.globalLoading = false;
  }
}
</script>

<style lang="scss">
.top-box {
  height: 100%;
  padding: 0 10px;
  .logo-box {
    width: 200px;
    height: 100%;
    line-height: 60px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    color: #fff;
    font-size: 15px;
    letter-spacing: 2px;
    img {
      width: 40px;
      margin-right: 10px;
    }
  }
  .userinfo {
    float: right;
    height: 100%;
    line-height: 60px;
    margin: 0 22px;
    .el-dropdown-link {
      color: #fff;
    }
  }
}
</style>