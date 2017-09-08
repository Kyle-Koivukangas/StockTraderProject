<template>
    <div class="component-container stock-component">
        <div class="stock-header">
            <h3 class="header-title">{{ stock.name }}</h3>
        </div>
        <div class="stock-content">
            <div class="info">
                <ul>
                    <li>Ticker: {{ stock.ticker }}</li>
                    <li>Price: {{ stock.price }}</li>
                    <li>Change: {{ exampleInfo.change }}
                        <i class="fa fa-arrow-down" aria-hidden="true"> </i>
                    </li>
                </ul>
            </div>
            <div class="options">
                <button id="show-modal" @click="showModal = true" class="btn">Buy</button>
            </div>

            <transition name="fade">
                <app-buy-modal v-if="showModal" :show="showModal" @close="showModal = false">
                    <div slot="header" class="buy-header">
                        <h3  class="text-center">Purchase {{ stock.name }} Stock</h3>

                    </div>
                    <div class="buy-options text-center" slot="body">
                        <label for="amount">Amount of shares: </label>
                        <input id="amount" type="number" name="quantity" v-model="amount">
                        <br> <br> <br> Purchase {{ amount }} {{ stock.ticker }} shares?
                    </div>

                    <div class="buy-button-footer" slot="footer">
                        <button class="purchase-button">Purchase</button>
                    </div>
                </app-buy-modal>
            </transition>

        </div>

    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            exampleInfo: {
                ticker: "TICKER",
                price: "$50.54",
                change: "Down .50"
            },
            stockChange: "up 0.54",
            showModal: false,
            amount: 5,
        }
    },
    components: {
        appBuyModal: () => import('./BuyModal.vue')
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.stock.quantity
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.stock-component {
    background-color: white;
    margin: 10px;
    @include border-radius(3px);
    border: 1.2px solid $dark;
    padding-top: 0px;
}

.stock-header {
    background-color: $dark;
    vertical-align: top;
    margin-top: 0px;
}

.header-title {
    padding-left: 10px;
}

.stock-content {
    display: flex;
    justify-content: flex-start; // align-items: center;
}

.info {
    font-family: $font2;
    flex: 4;
}

.options {
    display: flex;
    justify-content: center; // align-items: center;
    flex: 1;
}

.buy-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $dark;
    height: 50px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}
.buy-options {
    margin-top: 20px;
    height: 100%;
    width: 90%;
    font-weight: 400;
    font-family: $font1;
}

.buy-button-footer {
    width: 100%;
    padding: 0 5px 5px 5px;
    display: flex;
    justify-content: center;
}

.purchase-button {
    height: 40px;
    margin-bottom: 0px;
    flex: 10;
    @include border-radius(2px);
    border: 0px;
    background-color: $mid;
}





button {
    margin: 25px 0 25px 0;
    width: 50px;
    margin-right: 10px;
}

h3 {
    font-family: $font2;
    font-weight: 400;
    margin: auto 0 0 0;
    color: $lightFontColor;
}

ul {
    list-style-type: none;
}

li i {
    color: red;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>