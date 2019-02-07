import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import store from "./store";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
