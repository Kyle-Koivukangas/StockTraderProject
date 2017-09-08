//stocks state store
const state = {
    stocksList: {
        google: {
            ticker: 'GOOGL',
            price: 0,
        },
        ibm: {
            ticker: 'IBM',
            price: 0,
        },
        apple: {
            ticker: 'AAPL',
            price: 0,
        },
        hp: {
            ticker: 'HP',
            price: 0,
        }
    },
}
const getters = {
    stocksList(state) {
        return state.stocksList
    },

}
const mutations = {

}
const actions = {

}



export default {
    state,
    getters,
    mutations,
    actions
}