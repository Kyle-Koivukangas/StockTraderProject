<template>
    <div class="component-container">
        <div class="title-box">
            <h2 class="text-center">Your stock portfolio</h2>
            <hr>

        </div>

        <div class="content">
            <div class="title-box">
                <h4>Funds: {{ funds.toFixed(2) }}</h4>
            </div>

            <div class="owned-stocks">
                <app-stock v-for="stock in ownedStocks" :key="stock" :stock="stock"></app-stock>
            </div>
            <p>
                {{ ownedStocks }}
            </p>
                {{ transactions }}
            <app-transactions :transactions="transactions"></app-transactions>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['funds', 'ownedStocks', 'transactions'])
    },
    components: {
        appStock: () => import('./Stock.vue'),
        appTransactions: () => import('./Transactions.vue')
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.title-box {
    @include center--auto();
    font-family: $font1;
    width: 90%;
}

.content {
    @include center--auto();
    width: 90%;
    font-family: $font2;
    min-height: 500px;
    background-color: white;
    border: 1.2px solid $dark;
    @include border-radius(3px);
}
</style>