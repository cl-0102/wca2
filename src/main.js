import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./locales";
import "./index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
// 新增代码：引入全部组件及样式
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import VueLogger from "vuejs3-logger";
const isProduction = process.env.NODE_ENV === "production";
const options = {
  isEnabled: true,
  logLevel: isProduction ? "info" : "info",
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: false,
  separator: "|",
  showConsoleColors: true,
};

document.title = "WORLDCUP";

var vapp = createApp(App).use(VueLogger, options);
global.$log = vapp.$log;
vapp
  .use(router)
  .use(store)
  .use(i18n)
  .use(ElementPlus)
  .use(VueAwesomeSwiper)
  .mount("#app");
