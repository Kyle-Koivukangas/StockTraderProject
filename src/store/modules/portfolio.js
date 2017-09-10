//portfolio state store
const state = {
    funds: 10000,
    ownedStocks: [],
    transactions: [{ "orderType": "BUY", "stockTicker": "IBM", "quantity": 5, "stockPrice": 83.04, "date": "2017/09/09" }],
    date: '2017/09/09',
    userId: 0,
}
const getters = {
    ownedStocks: state => {
        console.log('STATE OWNED STOCKS:');
        
        console.log(state.ownedStocks);
        
        return state.ownedStocks
    },
    transactions: state => {
        return state.transactions
    },
    funds: state => {
        return state.funds
    },
    getLastDate: state => {
        const lastTransaction = state.transactions[state.transactions.length-1];
        return lastTransaction.date
    },
    userId: state => {
        console.log('RETUN USERiD');
        return state.userId
    }
}
const mutations = {
    'BUY_STOCK'(state, { stockTicker, quantity, stockPrice, date }) {
        const record = Object.keys(state.ownedStocks);
        console.log(`record: ${record}`);
        if (stockTicker in record) {
            stockTicker += quantity;
        } else {
            state.ownedStocks[stockTicker] = quantity
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockTicker, quantity, stockPrice, date }) {
        const record = Object.keys(state.ownedStocks);
        if (stockTicker in record) {
            stockTicker -= quantity;
        } else {
            console.log(`not enough stock to sell that many ${record}`)
            console.log(record);
        }
        state.funds += stockPrice * quantity;
        state.transactions.push({ orderType: 'SELL', stockTicker, quantity, stockPrice, date });
    },
    'SET_DATE'(state, date) {
        state.date = date;
    },
    'SET_FUNDS'(state, funds) {
        state.funds = funds;
    },
    'SET_OWNED_STOCKS'(state, stocks) {
        state.ownedStocks = stocks;
    },
    'SET_TRANSACTIONS'(state, transactions) {
        state.transactions = transactions;
    },
    'SYNC_DB'(state, data) {
        state.transactions = data.transactions;
        state.funds = data.funds;
    }
}
const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order)
    },
    initDate: ({commit}) => {
        const lastDate = state.getLastDate();
        commit('SET_DATE', lastDate);
    }
}



export default {
    state,
    getters,
    mutations,
    actions
}