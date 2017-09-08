<template>
    <div class="component-container">
        <h2 class="text-center">Stock Information</h2>
        <hr style="width: 90%;">
        <div class="stocks-grid">
            <app-stock v-for="stock in stocks" :key="1" :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
        }
    },
    components: {
        appStock: () => import('./Stock.vue'),
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.stocks-grid {
    display: grid;
    @include mq('phablet') {
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    }
    @include mq('tablet') {
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    }
    @include mq('desktop-wide') {
        grid-template: repeat(4, 1fr) / repeat(4, 1fr);        
    }
}

h2 {
    font-family: $font1;
}
</style>