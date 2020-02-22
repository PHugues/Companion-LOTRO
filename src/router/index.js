import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

import Home from '../views/Home.vue';
import ParametersRace from '../views/parameters/ParametersRace.vue';

Vue.use(VueRouter);
Vue.use(VueSidebarMenu);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/parameters/race',
        name: 'Parameters Race',
        component: ParametersRace
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;