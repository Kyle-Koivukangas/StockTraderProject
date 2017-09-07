import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portolio.js';
import stocks from './modules/stocks.js';


Vue.use(vuex);

export const store = new Vuex.Store({
    state: {
        
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        portfolio,
        stocks
    }
});