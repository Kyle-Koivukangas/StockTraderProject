<template>
    <div class="stock">
        <div>
            Stock: {{ stock.stockTicker }}, &#160;&#160;&#160;	&nbsp; Shares: {{ stock.quantity }}
            <button class="btn sell-btn">Sell</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    methods: {
        sellStock() {
            const order = {
                stockTicker: this.stock.ticker,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity),
                date: (new Date()).toISOString().slice(0, 10).replace(/-/g, "/")
            }
            this.$store.dispatch('buyStock', order);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.stock {
    max-height: 50px;
}
.sell-btn {
    min-width: 40px;
}
</style>