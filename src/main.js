import Vue from 'vue'
import iview from 'iview'
import echarts from 'echarts'
import App from './App.vue'
import 'iview/dist/styles/iview.css';
import './assets/style/base.less';


Vue.use(iview)
window.echarts = echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
