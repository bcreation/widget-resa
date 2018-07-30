import Vue from 'vue'
import WidgetsWrapper from './WidgetsWrapper.vue'

// import clients options
// heere is Oceano
import { overrideOptions } from './assets/js/override-options/override-options'

Vue.config.productionTip = false
// Passing clients options in props
new Vue({
  render: (h) => h(WidgetsWrapper, { props: { opts: [overrideOptions] } }),
}).$mount('#widgets-wrapper')
