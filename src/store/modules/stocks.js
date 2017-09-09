import axios from 'axios';

import stocksImport from '../../data/stocks.js';

//stocks state store
const state = {
    stocks: [],
}
const getters = {
    stocks: state => {
        return state.stocks
    }
}
const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RAND_STOCKS'(state) {
        console.log('No Randomize stocks mutation');

    }
}
const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        const stockImport = axios.get("stocksInit.json")
            .then(response => {
                return response.data;
            })
            .then(function commitData(data) {
                console.log('data:');
                console.log(data);
                const resultArray = [];
                for (let key in data) {
                    resultArray.push(data[key]);
                }
                console.log(resultArray);
                commit('SET_STOCKS', data);
            });
    },
    randomizeStocks: ({ commit }) => {
        commit('RAND_STOCKS');
    }
}



export default {
    state,
    getters,
    mutations,
    actions
}