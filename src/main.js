import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './store/rem.js'
import './store/request.js'

import axios from 'axios' // 1、在这里引入axios

Vue.prototype.$axios = axios;   // 2、在vue中使用axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
