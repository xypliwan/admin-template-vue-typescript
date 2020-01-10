<template>
  <div class="login-box">
    <div class="right-box">
      <login></login>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './Login.vue';

@Component({
  components: {
    Login
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.login-box {
  text-align: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  display: flex;
  .right-box {
    flex: 1;
    height: 100vh;
    background: url('./../../assets/images/loginbgor.png') no-repeat center center;
    background-size: contain;
    display: flex;
    align-items: center;
  }
}
</style>