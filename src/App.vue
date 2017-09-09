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
    created() {
        //init the store data
        this.$store.dispatch('initStocks');
        // this.$store.dispatch('initDate');
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
