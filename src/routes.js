import VueRouter from 'vue-router';
import Home from './components/views/home.vue'
import About from './components/views/about.vue'
import VerbGET from './components/views/verb/get.vue'

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/verb/get',
        component: VerbGET
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: ''
});