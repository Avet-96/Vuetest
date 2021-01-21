import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import './assets/styles/css/theme-1.css'
import './assets/styles/css/theme-2.css'
import './assets/styles/css/theme-3.css'
import './assets/styles/css/theme-4.css'
import './assets/styles/css/theme-5.css'
import './assets/styles/css/theme-6.css'
import './assets/styles/css/theme-7.css'
import './assets/styles/css/theme-8.css'


import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
