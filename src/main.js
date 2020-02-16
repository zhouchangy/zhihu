import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import { PullRefresh } from 'vant'
import 'vant/lib/index.css'

import '@/js/swiper.min.css'
import '@/js/demo.css'

Vue.use(VueAxios,axios)
axios.defaults.baseURL='/api'
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(PullRefresh);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
