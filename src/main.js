import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// permission 权限文件
import "./config/permission";
// element
import "element-plus/theme-chalk/display.css";

// layout components
import layoutComp from "./layouts/components/export";
layoutComp(app);

// router
import router from "./router/index";
app.use(router);

// vuex
import store from "@/store";
app.use(store);

import loadI18n from "./plugin/i18n";
loadI18n(app);

// 注册字节跳动图标
import iconPark from "./plugin/icon-park";
iconPark(app);

app.mount("#app");