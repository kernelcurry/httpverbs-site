import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = Vue;
Vue.use(VueRouter);

// load components
import Card from './components/card.vue'
Vue.component('card', Card);

import CardList from './components/card-list.vue'
Vue.component('card-list', CardList);