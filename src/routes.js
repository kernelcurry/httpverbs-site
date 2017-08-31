import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/home.vue')
    },
    {
        path: '/about',
        component: require('./views/about.vue')
    }
];

export default new VueRouter({
    routes
});