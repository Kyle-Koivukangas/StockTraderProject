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
    buyStock: (context, order) => {
        const userURL = "users/" + context.getters.userId;
        const ownedStocks = context.getters.ownedStocks
        const ticker = order.stockTicker
        let quant = order.quantity

        //check if stock already owned, if true: total quantities to update the firebase DB
        if (order.stockTicker in Object.keys(ownedStocks)) {
            quant += ownedStocks[order.stockTicker];
        }
        let dbOrder = {ticker: quant}

        //POST to update firebase transactions
        axios.post(userURL + "/transactions.json", order)
            .then(response => {
                if (response.status != 200) {
                    console.log(`POST ERROR: ${response.status}`);
                }
            });

        //POST to update firebase owned stock quantities
        axios.post(userURL + "/ownedStocks.json", dbOrder)
            .then(response => {
                if (response.status == 200) {
                    context.commit('BUY_STOCK', );
                } else {
                    alert(`Opps! There was an error talking to the server!`)
                    console.log(`HTTP POST ERROR: ${response.status}`)
                }
            });

        //POST to update firebase funds
        axios.post(userURL + "/funds.json", context.getters.funds)
            .then(response => {
                if (response.status != 200) {
                    console.log(`POST ERROR: ${response.status}`);
                }
            }).then(function syncDataFromServer() {
                const data = axios.get(userURL)
                    .then(response => {
                        commit('SYNC_DB', data);
                    })
            })



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