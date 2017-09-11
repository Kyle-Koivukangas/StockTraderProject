<template>
    <div>
        <div class="title-box">
            <h1>Sign up here!</h1>
            <hr>
        </div>

        <div class="content">
            <form v-on:submit.prevent="createAccount">
                <span>Enter your information</span>
                <label for="userName"></label>
                <input type="text" placeholder="User Name" value="userName" v-model="userName">
                <label for="password"></label>
                <input type="password" placeholder="password" value="password" v-model="password">
                <label for="password2"></label>
                <input type="password" placeholder="password" value="password2" v-model="password2">
                <button @click="visible=false">Submit</button>
            </form>
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
            password2: null
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
                // let usersRef = db.ref('users')
                let userInfo = {}
                userInfo[this.generateUuid()] = this.accountInfo;
                console.log(userInfo);
                axios.patch('users.json', userInfo);
            } else {
                alert("Something went wrong, check your username and passwords")
            }
        },
        generateUuid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            };
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    },

}
</script>

<style lang="scss" scoped>

</style>
