import Vue from 'vue'
import '@babel/polyfill';
import iview from 'iview'
import echarts from 'echarts'
import loadsh from 'loadsh'
import App from './App.vue'
import 'iview/dist/styles/iview.css';
import './assets/style/base.less';
// import Highcharts from 'highcharts/highstock';
// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsDrilldown from 'highcharts/modules/drilldown';
// import Highcharts3D from 'highcharts/highcharts-3d';
//
// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts)
// Highcharts3D(Highcharts)
// window.Highcharts = Highcharts

import chartConfig from './assets/script/chartConfig'

Vue.use(iview)
window.echarts = echarts
window.chartConfig = chartConfig
window._ = loadsh

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')