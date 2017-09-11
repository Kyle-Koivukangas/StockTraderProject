<template>
    <div>
        <div class="title-box">
            <h1>Sign up here!</h1>
            <hr>
        </div>

        <div class="content">
            <transition>
                <form v-on:submit.prevent="createAccount" v-if="!created">
                    <span>Enter your information</span>
                    <label for="userName"></label>
                    <input type="text" placeholder="User Name" value="userName" v-model="userName">
                    <label for="password"></label>
                    <input type="password" placeholder="password" value="password" v-model="password">
                    <label for="password2"></label>
                    <input type="password" placeholder="password" value="password2" v-model="password2">
                    <button @click="visible=false">Submit</button>
                </form>
            </transition>

            <transition>
                <div class="created-dialog" v-if="created">
                    <h3>Account created, log in to access your account!</h3>
                </div>
            </transition>

        </div>
    </div>
</template>

<script>
// import Firebase from 'firebase';
// const db = Firebase.initializeApp({baseURL: 'https://vuejscomplete-http.firebaseio.com'}).database();
import axios from 'axios';

export default {
    data() {
        return {
            userName: null,
            password: null,
            password2: null,
            created: false
        }
    },
    computed: {
        accountInfo() {
            return {
                userName: this.userName,
                password: this.password
            }
        }
    },
    methods: {
        createAccount() {
            //half-assed checks, but whatever
            if (this.userName != null && this.password === this.password2) {
                axios.get('users/' + this.userName + '.json')
                    .then(response => {
                        if (response.data != null) {
                            alert('User Name Already taken.');
                        } else {
                            let userInfo = {};
                            userInfo[this.userName] = { password: this.password };
                            axios.patch('users.json', userInfo).then(response => {
                                console.log(`User Created, status:${response.status}`);
                                this.created = true;
                            })
                        }
                    })
            } else {
                alert("Something went wrong, check that your passwords match")
            }
        },
    },

}
</script>

<style lang="scss" scoped>

</style>
