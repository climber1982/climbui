import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
Vue.use(VueAxios, axios)
NutUI.install(Vue)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
