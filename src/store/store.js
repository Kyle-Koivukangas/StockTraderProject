import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio.js';
import stocks from './modules/stocks.js';


Vue.use(Vuex);

export default new Vuex.Store({
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