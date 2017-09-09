import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
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
        grabUserInfo: (context, userId) => {
            console.log('DATA BEFORE AJAX CALL');
            console.log(context.getters.ownedStocks);
            const userURL = "users/" + userId + ".json";            
            const userImport = axios.get(userURL)
                .then( response => {
                    console.log('HTTP RESPONSE: ');
                    console.log(response);
                    return response.data;
                })
                .then(function commitData(data) {
                    console.log('HTTP DATA:');
                    // console.log(data.funds);                    
                    console.log(data.ownedStocks);
                    // console.log(data.transactions);
                    const ownedStocks = [];
                    for (let s in data.ownedStocks) {
                        ownedStocks.push(s);
                    }
                    console.log('OWNED STOCKS');
                    console.log(ownedStocks);
                    
                    context.commit('SET_FUNDS', data.funds);                
                    context.commit('SET_OWNED_STOCKS', data.ownedStocks);
                    context.commit('SET_TRANSACTIONS', data.transactions);
                })
        }
    },
    modules: {
        portfolio,
        stocks
    }
});