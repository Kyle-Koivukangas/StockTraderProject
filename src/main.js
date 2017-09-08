import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import { routes } from './routes.js'
import store from './store/store.js'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {selector: to.hash};
        } else {
            return {X: 0, Y: 0};
        }
    }
});


//not useing axios yet, but this is here to remind me for now
// Vue.use(VueAxios, axios);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    name: 'Main.js'
})
