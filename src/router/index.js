import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {layout: 'main'},
        component: () => import('@/views/Home')
    },
    {
        path: '/chat',
        name: 'Chat',
        meta: {layout: 'main'},
        component: () => import('@/views/Chat')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
