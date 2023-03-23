import Vue from "vue";
import App from "./App.vue";

import btnCom from "btn-com";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(btnCom);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
