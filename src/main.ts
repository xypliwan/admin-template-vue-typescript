import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import "./assets/style/global.scss";
import "./assets/font/iconfont.css";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  data: {
    tableTitileStyle: {
      "background-color": "#f5f5f5",
      "color": "#333333",
      "font-weight": "bold",
      "font-size": "13px",
      "height": "40px",
    },
    tableContentStyle: {
      "font-size": "13px",
      "color": "#666666",
      "height": "60px",
    },
    viewShow: true,
    globalLoading: false

  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
