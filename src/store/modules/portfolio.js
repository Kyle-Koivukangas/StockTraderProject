//portfolio state store
const state = {
    funds: 10000,
    ownedStocks: [],
    transactions: [],
}
const getters = {
    ownedStocks: state => {
        return state.ownedStocks
    },
    transactions: state => {
        return state.transactions
    },
    funds: state => {
        return state.funds
    }
}
const mutations = {
    'BUY_STOCK'(state, { stockTicker, quantity, stockPrice, date }) {
        const record = state.ownedStocks.find(element => element.stockTicker == stockTicker);
        console.log(`record: ${record}`);
        if (record) {
            record.quantity += quantity;
        } else {
            state.ownedStocks.push({
                stockTicker: stockTicker,
                quantity: quantity,
            })
        }
        state.funds -= stockPrice * quantity;
        state.transactions.push({ order: 'BUY', stockTicker, quantity, stockPrice, date });
    },
    'SELL_STOCK'(state, { stockTicker, quantity, stockPrice, date }) {
        const record = state.ownedStocks.find(element => element.stockTicker == stockTicker);
        if (record.quantity >= quantity) {
            record.quantity -= quantity;
        } else {
            console.log(`not enough stock to sell that many ${record}`)
            console.log(record);
        }
        state.funds += stockPrice * quantity;
        state.transactions.push({ order: 'SELL', stockTicker, quantity, stockPrice, date });
    },
}
const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order)
    },
}



export default {
    state,
    getters,
    mutations,
    actions
}