import VueRouter from 'vue-router';

import Home from './components/views/home.vue'
import About from './components/views/about.vue'

import VerbGET from './components/views/verb/get.vue'
import VerbHEAD from './components/views/verb/head.vue'
import VerbPOST from './components/views/verb/post.vue'
import VerbPUT from './components/views/verb/put.vue'
import VerbPATCH from './components/views/verb/patch.vue'
import VerbDELETE from './components/views/verb/delete.vue'

import Page404 from './components/views/404.vue'

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
    },
    {
        path: '/verb/head',
        component: VerbHEAD
    },
    {
        path: '/verb/post',
        component: VerbPOST
    },
    {
        path: '/verb/put',
        component: VerbPUT
    },
    {
        path: '/verb/patch',
        component: VerbPATCH
    },
    {
        path: '/verb/delete',
        component: VerbDELETE
    },
    {
        path: '*',
        component: Page404
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: ''
});