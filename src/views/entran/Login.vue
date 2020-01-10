<template>
  <div class="account-login">
    <div class="img-wrapper">
      <img src="./../../assets/images/favicon.png" alt />
      运营管理系统
    </div>
    <div class="item">
      <div class="icon-box">
        <i class="iconfont icon-user"></i>
      </div>
      <div class="ipt">
        <input type="text" @keyup.enter="goLogin" v-model="params.username" placeholder="请输入账号" />
      </div>
    </div>
    <div class="item">
      <div class="icon-box">
        <i class="iconfont icon-mima"></i>
      </div>
      <div class="ipt">
        <input type="password" @keyup.enter="goLogin" v-model="passwordBefor" placeholder="请输入密码" />
      </div>
    </div>
    <div class="login-btn">
      <!-- <el-button type="primary">主要按钮</el-button> -->
      <el-button class="login-btn" type="primary" @click="goLogin" :loading="loginLoading">{{loginText}}</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { login } from '@/api/user';
import { encrypt } from '@/utils/crypto';
import { Component, Vue } from 'vue-property-decorator';
import { setLocalStorage } from '@/utils/localStorage';
@Component({
  components: {}
})
export default class extends Vue {
  private params = {
    username: 'dev',
    password: 'ec@123456',
    timestamp: ''
  };

  private passwordBefor: string = 'ec@123456';
  private loginLoading: boolean = false;
  private loginText: string = '登录';

  private async goLogin() {
    if (!this.params.username.length) {
      this.$message.warning('请输入账号');
      return;
    } else if (!this.passwordBefor.length) {
      this.$message.warning('请输入密码');
      return;
    } else {
      try {
        this.loginLoading = true;
        this.loginText = '登陆中...';
        // this.params.timestamp = encrypt(this.passwordBefor).nowTime;
        // this.params.password = encrypt(this.passwordBefor).encrypted;
        // let { data, message } = await login(this.params);
        // this.$message.success(message);

        // 此处模拟登陆返回
        let data = {
          token: 'ASSSAssdddd111111'
        };

        setLocalStorage('Access-Token', data.token);
        // this.setSelectIndex(0);
        setTimeout(() => {
          this.$router.push('/');
        }, 500);
      } catch (error) {
        this.$message.error(error);
      }
      this.loginLoading = false;
      this.loginText = '登陆';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.account-login {
  width: 350px;
  margin: 0 auto;
  padding: 20px 0;
  .img-wrapper {
    margin-bottom: 20px;
    font-size: 15px;
    color: #409eff;
    font-weight: 700;
    img {
      vertical-align: middle;
      width: 45px;
      margin-right: 12px;
    }
  }
  .item {
    width: 100%;
    margin-bottom: 20px;
    height: 50px;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    .icon-box {
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      .iconfont {
        width: 20px;
        height: 20px;
        color: #409eff;
      }
    }
    .ipt {
      flex: 1;
      padding-left: 10px;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 13px;
      }
    }
    .remember {
      display: inline-block;
      font-size: 14px;
      color: #666;
      input {
        position: relative;
        top: 2px;
      }
    }
  }
  .remember-item {
    border: none;
  }
  .login-btn {
    width: 100%;
    .login-btn {
      margin-top: 45px;
      color: #fff;
    }
  }
}
</style>
