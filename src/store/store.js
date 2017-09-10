import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import VuexFire from 'vuexfire'
// import { firebaseMutations } from 'vuexfire'

import portfolio from './modules/portfolio.js';
import stocks from './modules/stocks.js';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        user: 0,
        loginStatus: false
    },
    getters: {
        user: state => {
            return state.user;
        },
        isLoggedIn: state => {
            return state.isLoggedIn;
        },
        loginStatus: state => {
            return state.loginStatus
        }
    },
    mutations: {
        'SET_USER'(state, userId) {
            state.user = userId;
        },
        'SET_LOGIN_STATUS'(state, status) {
            state.loginStatus = status;
        }
    },
    actions: {
        // setUserRef: VuexFire
        login({ commit }, userName) {
            //placeholder login function, need to replace with proper functionality not jsut auto log in user 0
            alert("logged in");
            commit('SET_USER', userName);
            commit('SET_LOGIN_STATUS', true);
        },
        logout({commit}) {
            //placeholder logout function
            commit('SET_LOGIN_STATUS', false);
        },











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