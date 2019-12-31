import Vue from 'vue'
import App from './App.vue'
import JgRightMenu from './../packages/index'
Vue.use(JgRightMenu)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
