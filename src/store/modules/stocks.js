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
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RAND_STOCKS' (state) {
        console.log('No Randomize stocks mutation');
        
    }
}
const actions = {
    buyStock: ({commit}, order) => {
        commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocksImport);
    },
    randomizeStocks: ({commit}) => {
        commit('RAND_STOCKS');
    }
}



export default {
    state,
    getters,
    mutations,
    actions
}