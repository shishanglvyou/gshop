import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import './assets/css/reset.css'

FastClick.attach(document.body);

Vue.config.productionTip = false

import loading from './common/imgs/loading.gif'

// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
