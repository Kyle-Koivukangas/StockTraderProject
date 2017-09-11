<template>
    <div>
        <div class="title-box text-center">
            <h2>Sign up here!</h2>
            <hr>
        </div>

        <div class="content">
            <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div>
                    <form class="signupForm" v-on:submit.prevent="createAccount" v-if="!created">
                        <label for="name">User name</label>
                        <input type="text" id="name" placeholder="Your user name.." v-model="userName">

                        <label for="pword">Password</label>
                        <input type="password" id="pword" placeholder="Your password.." v-model="password">

                        <label for="pword2">Password check</label>
                        <input type="password" id="pword2" placeholder="Your password again.." v-model="password2">

                        <input type="submit" value="Submit" @click="visible=false">
                    </form>
                </div>
            </transition>

            <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div class="created-dialog text-center" v-if="created">
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
@import '../styles/_variables.scss';
.title-box {
    font-family: $font1;
    padding: 0;
}
.signupForm {
    font-family: $font2;
}
.content {
    max-width: 500px;
    margin: auto;
}

input[type=text],
input[type=password],
 select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: $dark;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: $lighterDark;
}

div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
