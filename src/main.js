import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 根据注释生成文档
// https://segmentfault.com/a/1190000040260635
// https://vuese.github.io/vuese-explorer/