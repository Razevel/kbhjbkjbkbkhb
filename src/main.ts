import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import PluginCreator from './vendor/VuePluginCreator'

import {lc, ucFirst, cut, expand} from './vendor/i18n'

Vue.config.productionTip = false;

Vue.use(PluginCreator.createPluginFunction(ucFirst, 'ucFirst'));
Vue.use(PluginCreator.createPluginFunction(lc, 'lc'));
Vue.use(PluginCreator.createPluginFunction(cut, 'cut'));
Vue.use(PluginCreator.createPluginFunction(expand, 'expand'));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

