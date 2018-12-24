import Vue from 'vue'
import App from './App.vue'
import Companies from './components/companies.vue'
import Company from './components/company.vue'
import VueRouter from 'vue-router'
import VueApexCharts from 'vue-apexcharts'



Vue.use(VueApexCharts)
Vue.use(VueRouter)
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false

const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/companies', component: Companies },
  { path: '/company/:symbol', component: Company },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
