import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import PluginCreator from './vendor/VuePluginCreator'

import {lc, ucFirst} from './vendor/i18n'

Vue.config.productionTip = false;

Vue.use(PluginCreator.createPluginFunction(ucFirst));
Vue.use(PluginCreator.createPluginFunction(lc));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

