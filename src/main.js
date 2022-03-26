import { createApp, VueElement } from "vue";
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

Vue.config.productionTip = false
