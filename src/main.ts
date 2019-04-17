import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import {LocalPluginObject, TFPluginObject} from './vendor/i18n'

Vue.config.productionTip = false;

Vue.use(LocalPluginObject);
Vue.use(TFPluginObject);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

