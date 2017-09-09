//portfolio state store
const state = {
    funds: 10000,
    ownedStocks: [],
    transactions: [{ "orderType": "BUY", "stockTicker": "IBM", "quantity": 5, "stockPrice": 83.04, "date": '2017/09/09' }],
    date: '2017/09/09',
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
        state.transactions.push({ orderType: 'BUY', stockTicker, quantity, stockPrice, date });
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