<template>
    <div class="navbar">
        <router-link to="/" tag="button" class="nav-btn" active-class="active" exact>Home</router-link>
        <router-link v-for="(link, linkName) in links" :key="linkName" :to="link" class="nav-btn" active-class="active">
            {{ linkName }}
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
    background-color: $highlight;
    color: $lightFontColor;
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
    color: black;
    cursor: pointer;
    height: 100%;
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
        // outline: 0;
        background-color: $highlight;
    }
    &:active {
        background-color: $darkerMid;
    }
}
</style>
