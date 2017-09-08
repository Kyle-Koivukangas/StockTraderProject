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
            stocksList: ['Google', 'IBM', 'Apple', 'HP', 'company1', 'company2', 'company3', 'company4'],
            stocks: [
                { id: 1, name: 'Tesla', ticker: 'HP', price: 249.64 },
                { id: 2, name: 'Google', ticker: 'GOOGL', price: 111.97 },
                { id: 3, name: 'IBM', ticker: 'AAPL', price: 83.04 },
                { id: 4, name: 'Apple', ticker: 'IBM', price: 95.06 },
                { id: 5, name: 'HP', ticker: 'HP', price: 65.78 },
            ]
        }
    },
    components: {
        appStock: () => import('./Stock.vue'),
    },
    // computed: {
    //     ...mapGetters(['stocksList']),
    //     getStocks() {
    //         return this.$store.state.stocksList;
    //     }
    // }
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