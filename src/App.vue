<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
  </div>
</template>

<script>
require("font-awesome-webpack");

export default {
    name: 'app',
    data() {
        return {
        }
    },
    components: {
        appHeader: () => import('./components/Header.vue'),
    },
    computed: {
        userName() {
            return this.$store.getters.getUserId;
        }
    },
    created() {
        //init the store data
        this.$store.dispatch('initStocks');
        // this.$store.dispatch('initDate');
        this.$store.dispatch('grabUserInfo', this.userName);
    }
}
</script>

<style lang="scss">
@import './styles/_variables.scss';
@import './styles/_globalClasses.scss';

#app {
    background-color: $lightFontColor;
    min-height: 800px;
}

.component-container {
}

</style>
