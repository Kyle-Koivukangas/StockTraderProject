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
        this.$store.dispatch('initStocks');
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
