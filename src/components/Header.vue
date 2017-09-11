<template>
    <div class="navbar">
        <div class="navbox-left">
            <div class="navbrand">
                <router-link to="/" tag="a">
                    <h3>Stock Trader</h3>
                </router-link>
            </div>
            <router-link to="/" class="nav-btn nav-brand" tag="li" active-class="active" exact>
                <a>Home</a>
            </router-link>
            <router-link v-for="(link, linkName) in links" :key="linkName" :to="link" class="nav-btn" tag="li" active-class="active">
                <a>{{ linkName }}</a>
            </router-link>
        </div>
        <div class="navbox-right">
            <dropdown animation="ani-slide-y" :visible="visible" :position="position" @clickOut="visible = !visible" v-if="!loginStatus">
                <div class="nav-btn" @click="visible = !visible">
                    <div class="login-btn">Login</div>
                </div>
                <div slot="dropdown" class="dialog">
                    <form v-on:submit.prevent="login">
                        <span>Enter your information</span>
                        <input type="text" placeholder="User Name">
                        <input type="password" placeholder="password" @keydown.enter="">
                        <button @click="visible=false">Submit</button>
                    </form>
                    <span class="small-txt">Need an account? sign up
                        <router-link to="/signup" @click.native="visible=false">here</router-link>.</span>
                </div>
            </dropdown>

            <div class="nav-btns" v-if="loginStatus">
                <div class="nav-btn login-btn" @click="newDay">New Day</div>
                <div class="nav-btn login-btn" @click="logout">Logout</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dropdown from 'vue-my-dropdown';

export default {
    data() {
        return {
            links: {
                'Stocks': '/stocks',
                'Portfolio': '/portfolio'
            },
            position: ["right", "bottom", "right", "top"],
            visible: false,
            inputUser: 0,
            inputPassword: null,
        }
    },
    components: {
        dropdown
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
        user() {
            return this.$store.getters.user;
        },
        loginStatus() {
            return this.$store.getters.loginStatus
        }
    },
    methods: {
        login(user = 0) {
            //placeholder login function, just sets user value in the store
            this.$router.push('/portfolio')
            this.$store.dispatch('login', user);

        },
        logout() {
            this.$store.dispatch('logout');
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.active {
    background-color: $darkerDark !important;
    color: $lightFontColor !important; // text-decoration: underline !important;   
}

.navbrand {
    margin: auto;
    padding: 10px;

    & a {
        text-decoration: none;
    }
    & a h3 {
        font-weight: 900;
        color: #111;
        margin: auto;
    }
}

.navbar {
    @include box-shadow(0px, 0px, 8px, black);
    height: 50px;
    overflow: hidden; // display: flex;
    justify-content: center;
    align-items: center;
    font-family: $font1;
    font-weight: 500;
    color: black;
    background-color: $dark;
}

.navbox-left {
    height: 100%;
    float: left;
    display: flex; // float: left;
}

.nav-btn {
    @include noselect();
    padding: 5px 5px 5px 5px;
    background-color: $dark;
    font-family: $font2;
    text-decoration: none;
    color: black;
    height: 100%;
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & a {
        text-decoration: inherit;
        color: inherit;
    }
    & a:focus {
        outline: 1;
        text-decoration: bold;
    }
    &:active {
        background-color: $darkerDark;
    }
}

.navbox-right {
    float: right;
    margin: auto 10px auto 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-btns {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog {
    background: #eee;
    border: 1px solid #ccc;
    padding: .8rem;
    box-shadow: 1px 1px 6px 0 #999;
}

.login-btn {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.dropdown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nday-btn {
    margin: auto 10px auto 0;
    cursor: pointer;
}

.small-txt {
    font-size: .63em;
}
</style>
