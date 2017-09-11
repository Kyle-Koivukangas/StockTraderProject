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
        loginStatus: false,
        userState: {}
    },
    getters: {
        user: state => {
            return state.user;
        },
        isLoggedIn: state => {
            //deprecated
            return state.isLoggedIn;
        },
        loginStatus: state => {
            return state.loginStatus
        },
        userState: state => {
            return state.userState
        }
    },
    mutations: {
        'SET_USER'(state, userId) {
            state.user = userId;
        },
        'SET_LOGIN_STATUS'(state, status) {
            state.loginStatus = status;
        },
        'SET_USER_STATE'(state, userState) {
            state.userState = userState
        }
    },
    actions: {
        // setUserRef: VuexFire
        login(context, { userName, password }) {
            //Authenticate, GET firebase users/userName/password
            //this GET request is JUST for the password of the given username to see if the passwords match
            axios.get('users/' + userName + '/password.json')
                .then(response => {
                    //make sure the response is not null or a came back with error
                    if (!response.data === true || response.status > 400) {
                        console.log(`HTTP CODE: ${response.status}, if 200 then user doesn't exist.`);
                        alert("incorrect user name or password, try again");
                    }
                    //if passwords match, authentication successfull
                    else if (response.data === password) {
                        console.log('Authentication successful!');
                        //another GET request, this time to get the rest of the users info.
                        axios.get('users/' + userName + '.json')
                            .then(response => {
                                if (response.status < 400) {
                                    //commit users info to the store and change status to logged in
                                    context.commit('SET_USER_STATE', response.data);
                                    context.commit('SET_LOGIN_STATUS', true);
                                } else {
                                    console.log(`ERROR GETTING USER STATE FROM SERVER, status code: ${response.status}`);
                                }
                            })
                    } else {
                        alert('incorrect password, try again');
                    }
                })
        },
        logout({ commit }) {
            //clear cached user state and set status to logged out
            commit('SET_USER_STATE', null);
            commit('SET_LOGIN_STATUS', false);
        },











        grabUserInfo: (context, userId) => {
            console.log('DATA BEFORE AJAX CALL');
            console.log(context.getters.ownedStocks);
            const userURL = "users/" + userId + ".json";
            const userImport = axios.get(userURL)
                .then(response => {
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