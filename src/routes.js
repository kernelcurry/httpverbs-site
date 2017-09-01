import VueRouter from 'vue-router';
import Home from './components/views/home.vue'
import About from './components/views/about.vue'

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: ''
});