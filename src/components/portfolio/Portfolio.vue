<template>
    <div class="component-container">
        <div class="title-box">
            <h2 class="text-center">Your stock portfolio</h2>
            <hr>

        </div>

        <div class="content">
            <div class="title-box">
                <p class="date">Date: {{ getLastDate }}</p>
                <h4>Funds: {{ funds.toFixed(2) }}</h4>
            </div>

            <div class="owned-stocks">
                <h3>Your Stocks:</h3>
                <ul>
                    <li v-for="(stock, index, key) in ownedStocks" :key="key">
                        <app-stock :stock="stock"></app-stock>
                    </li>
                </ul>
            </div>

            <button @click="toggleShowTransactions">Transaction History</button>
            <app-transactions v-if="showTransactions" :transactions="transactions"></app-transactions>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            showTransactionsy: false,
        }
    },
    computed: {
        ...mapGetters(['funds', 'ownedStocks', 'transactions', 'getLastDate', 'showTransactions']),
    },
    components: {
        appStock: () => import('./Stock.vue'),
        appTransactions: () => import('./Transactions.vue')
    },
    methods: {
        toggleShowTransactions() {
            this.$store.dispatch('toggleShowTransactions');
        },
        advanceDay() {
            return null
        },
        addDays(date, days) {
            var dat = new Date(this.valueOf());
            dat.setDate(dat.getDate() + days);
            return dat
        }
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

.date {
    text-align: right;
}
.owned-stocks {
    min-height: 150px;
}
</style>