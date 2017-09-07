<template>
    <div class="navbar">
        <router-link to="/" class="nav-btn" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link v-for="(link, linkName) in links" :key="linkName" :to="link" class="nav-btn" tag="li" active-class="active">
            <a>{{ linkName }}</a>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: {
                'Stocks': '/stocks',
                'Portfolio': '/portfolio'
            }
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.active {
    background-color: $darkerMid !important;
    color: $lightFontColor !important;
    // text-decoration: underline !important;   
}

.navbar {
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $font1;
    font-weight: 500;
    color: black;
    background-color: $mid;
}

.nav-btn {
    @include noselect();
    padding: 5px 5px 5px 5px;
    background-color: $mid;
    font-family: $font2;
    text-decoration: none;
    color: black;
    height: 100%;
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    & a {
        text-decoration: inherit;
        color: inherit;
    }
    & a:focus {
        outline: 0;
        text-decoration: underline;
    }
    &:active {
        background-color: $darkerMid;
    }
}
</style>
